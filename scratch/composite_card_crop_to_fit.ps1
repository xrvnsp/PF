Add-Type -AssemblyName System.Drawing

# 1. Update Lanyard texture from user uploaded 4:1 image
$userLanyardPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788161047433.png'
$destLanyardPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

$lanyardImg = [System.Drawing.Image]::FromFile($userLanyardPath)
# Save as crisp PNG
$lanyardBmp = New-Object System.Drawing.Bitmap($lanyardImg.Width, $lanyardImg.Height)
$lg = [System.Drawing.Graphics]::FromImage($lanyardBmp)
$lg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$lg.DrawImage($lanyardImg, 0, 0, $lanyardImg.Width, $lanyardImg.Height)
$lg.Dispose()
$lanyardImg.Dispose()
$lanyardBmp.Save($destLanyardPath, [System.Drawing.Imaging.ImageFormat]::Png)
$lanyardBmp.Dispose()
Write-Host "Updated lanyard texture from 4:1 image: $destLanyardPath"

# 2. Recomposite ID Card with CROP-TO-FIT (Cover mode with bleed)
$basePath = 'c:\Users\901969\Documents\SP Portfolio\assets\base_card_texture.png'
$frontPath = 'c:\Users\901969\Documents\SP Portfolio\assets\id_card_front.png'
$backPath = 'c:\Users\901969\Documents\SP Portfolio\assets\id_card_back.png'
$outPath = 'c:\Users\901969\Documents\SP Portfolio\assets\card_composite.png'

$baseImg = [System.Drawing.Image]::FromFile($basePath)
$frontImg = [System.Drawing.Image]::FromFile($frontPath)
$backImg = [System.Drawing.Image]::FromFile($backPath)

$W = $baseImg.Width
$H = $baseImg.Height

$bmp = New-Object System.Drawing.Bitmap($W, $H)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Draw the base texture with plastic/leather grain
$g.DrawImage($baseImg, 0, 0, $W, $H)

# Helper function: Crop-To-Fit (Cover) with full edge bleed (eliminates all white margins/gutters)
function Draw-Cover ($img, [float]$rx, [float]$ry, [float]$rw, [float]$rh) {
    # Scale with MAX so the image completely fills and covers the destination rectangle
    $scale = [Math]::Max($rw / $img.Width, $rh / $img.Height)
    $dw = $img.Width * $scale
    $dh = $img.Height * $scale
    $dx = $rx + ($rw - $dw) / 2.0
    $dy = $ry + ($rh - $dh) / 2.0

    # Clip to target rectangle to prevent overlap
    $oldClip = $g.Clip
    $clipRect = New-Object System.Drawing.RectangleF($rx, $ry, $rw, $rh)
    $g.SetClip($clipRect)
    
    $g.DrawImage($img, [float]$dx, [float]$dy, [float]$dw, [float]$dh)
    
    $g.Clip = $oldClip
}

# ReactBits card.glb UV mapping:
# Front UV Rect: x=0, y=0, w=0.5, h=0.755
# Back UV Rect: x=0.5, y=0, w=0.5, h=0.757
Draw-Cover $frontImg (0.0 * $W) (0.0 * $H) (0.5 * $W) (0.755 * $H)
Draw-Cover $backImg (0.5 * $W) (0.0 * $H) (0.5 * $W) (0.757 * $H)

$g.Dispose()
$baseImg.Dispose()
$frontImg.Dispose()
$backImg.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Created edge-to-edge cropped composite texture: $outPath"
