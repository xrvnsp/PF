Add-Type -AssemblyName System.Drawing

$mmwLanyardSrc = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788171439056.png'
$mmwCardSrc = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788171439142.png'

# 1. Process MMW Lanyard Ribbon (2048x512)
$lanyardDest = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_lanyard.png'
$lImg = [System.Drawing.Image]::FromFile($mmwLanyardSrc)
$lBmp = New-Object System.Drawing.Bitmap(2048, 512)
$lg = [System.Drawing.Graphics]::FromImage($lBmp)
$lg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$lg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$lg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$lg.DrawImage($lImg, 0, 0, 2048, 512)
$lg.Dispose()
$lImg.Dispose()
$lBmp.Save($lanyardDest, [System.Drawing.Imaging.ImageFormat]::Png)
$lBmp.Dispose()
Write-Host "Created MMW Lanyard texture: $lanyardDest"

# 2. Crop MMW ID Card Front (Remove outer grey background)
# The image size is 768x1024 or similar, white card is approx: x=82, y=48, w=604, h=928
$cardImg = [System.Drawing.Image]::FromFile($mmwCardSrc)
$W = $cardImg.Width
$H = $cardImg.Height

# Measure card bounds: look for transition from grey background to white card
$cropX = [int]($W * 0.106)
$cropY = [int]($H * 0.048)
$cropW = [int]($W * 0.788)
$cropH = [int]($H * 0.904)

$frontBmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$fg = [System.Drawing.Graphics]::FromImage($frontBmp)
$fg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$fg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$srcRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropW, $cropH)
$dstRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, $cropH)
$fg.DrawImage($cardImg, $dstRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$fg.Dispose()
$frontDest = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_id_front.png'
$frontBmp.Save($frontDest, [System.Drawing.Imaging.ImageFormat]::Png)
$cardImg.Dispose()
Write-Host "Cropped MMW Front Card: $frontDest"

# 3. Create Branded MMW Card Back
$backBmp = New-Object System.Drawing.Bitmap($cropW, $cropH)
$bg = [System.Drawing.Graphics]::FromImage($backBmp)
$bg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$bg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$bg.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Clean white card background
$bg.Clear([System.Drawing.Color]::White)

# Top gradient header (Orange to Purple)
$gradRect = New-Object System.Drawing.Rectangle(0, 0, $cropW, [int]($cropH * 0.28))
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $gradRect,
    [System.Drawing.Color]::FromArgb(255, 245, 100, 20),
    [System.Drawing.Color]::FromArgb(255, 110, 45, 180),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$bg.FillRectangle($gradBrush, $gradRect)
$gradBrush.Dispose()

# Header text on gradient
$fontHead = New-Object System.Drawing.Font('Arial', 24, [System.Drawing.FontStyle]::Bold)
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$bg.DrawString('MADRAS MINDWORKS', $fontHead, $brushWhite, 35, 45)

$fontSub = New-Object System.Drawing.Font('Arial', 14, [System.Drawing.FontStyle]::Regular)
$bg.DrawString('XR & Spatial Computing Labs', $fontSub, $brushWhite, 38, 90)

$fontEmp = New-Object System.Drawing.Font('Arial', 16, [System.Drawing.FontStyle]::Bold)
$brushDark = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 30, 35, 50))
$brushMuted = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 90, 100, 120))

# Body details
$bg.DrawString('EMPLOYEE DETAILS', $fontEmp, $brushDark, 38, [int]($cropH * 0.34))

$fontDetails = New-Object System.Drawing.Font('Arial', 14, [System.Drawing.FontStyle]::Regular)
$fontVal = New-Object System.Drawing.Font('Arial', 14, [System.Drawing.FontStyle]::Bold)

$bg.DrawString('Designation:', $fontDetails, $brushMuted, 38, [int]($cropH * 0.40))
$bg.DrawString('AR/VR Developer', $fontVal, $brushDark, 175, [int]($cropH * 0.40))

$bg.DrawString('Emp Code:', $fontDetails, $brushMuted, 38, [int]($cropH * 0.45))
$bg.DrawString('MMW22034', $fontVal, $brushDark, 175, [int]($cropH * 0.45))

$bg.DrawString('Tenure:', $fontDetails, $brushMuted, 38, [int]($cropH * 0.50))
$bg.DrawString('May 2022 - Nov 2024', $fontVal, $brushDark, 175, [int]($cropH * 0.50))

$bg.DrawString('Blood Group:', $fontDetails, $brushMuted, 38, [int]($cropH * 0.55))
$bg.DrawString('A+', $fontVal, $brushDark, 175, [int]($cropH * 0.55))

# Footer disclaimer
$fontFooter = New-Object System.Drawing.Font('Arial', 10, [System.Drawing.FontStyle]::Regular)
$bg.DrawString('If found please return to:', $fontFooter, $brushMuted, 38, [int]($cropH * 0.72))
$fontCompany = New-Object System.Drawing.Font('Arial', 12, [System.Drawing.FontStyle]::Bold)
$bg.DrawString('Madras MindWorks Pvt Ltd, Chennai, India', $fontCompany, $brushDark, 38, [int]($cropH * 0.76))

# Bottom orange/purple bar
$barRect = New-Object System.Drawing.Rectangle(0, [int]($cropH * 0.94), $cropW, [int]($cropH * 0.06))
$barBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $barRect,
    [System.Drawing.Color]::FromArgb(255, 110, 45, 180),
    [System.Drawing.Color]::FromArgb(255, 245, 100, 20),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$bg.FillRectangle($barBrush, $barRect)
$barBrush.Dispose()

$fontHead.Dispose()
$fontSub.Dispose()
$fontEmp.Dispose()
$fontDetails.Dispose()
$fontVal.Dispose()
$fontFooter.Dispose()
$fontCompany.Dispose()
$brushWhite.Dispose()
$brushDark.Dispose()
$brushMuted.Dispose()
$bg.Dispose()

$backDest = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_id_back.png'
$backBmp.Save($backDest, [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Created MMW Back Card: $backDest"

# 4. Create MMW Composite Texture on base_card_texture.png
$basePath = 'c:\Users\901969\Documents\SP Portfolio\assets\base_card_texture.png'
$baseImg = [System.Drawing.Image]::FromFile($basePath)
$atlasW = $baseImg.Width
$atlasH = $baseImg.Height

$atlasBmp = New-Object System.Drawing.Bitmap($atlasW, $atlasH)
$ag = [System.Drawing.Graphics]::FromImage($atlasBmp)
$ag.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$ag.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

$ag.DrawImage($baseImg, 0, 0, $atlasW, $atlasH)

function Draw-Cover ($g, $img, [float]$rx, [float]$ry, [float]$rw, [float]$rh) {
    $scale = [Math]::Max($rw / $img.Width, $rh / $img.Height)
    $dw = $img.Width * $scale
    $dh = $img.Height * $scale
    $dx = $rx + ($rw - $dw) / 2.0
    $dy = $ry + ($rh - $dh) / 2.0

    $oldClip = $g.Clip
    $clipRect = New-Object System.Drawing.RectangleF($rx, $ry, $rw, $rh)
    $g.SetClip($clipRect)
    $g.DrawImage($img, [float]$dx, [float]$dy, [float]$dw, [float]$dh)
    $g.Clip = $oldClip
}

# Draw Front to left UV rect, Back to right UV rect
Draw-Cover $ag $frontBmp 0.0 0.0 (0.5 * $atlasW) (0.755 * $atlasH)
Draw-Cover $ag $backBmp (0.5 * $atlasW) 0.0 (0.5 * $atlasW) (0.757 * $atlasH)

$ag.Dispose()
$baseImg.Dispose()
$frontBmp.Dispose()
$backBmp.Dispose()

$atlasDest = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_card_composite.png'
$atlasBmp.Save($atlasDest, [System.Drawing.Imaging.ImageFormat]::Png)
$atlasBmp.Dispose()

Write-Host "Created MMW Composite Atlas: $atlasDest"
