Add-Type -AssemblyName System.Drawing

$outPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

# Create clean 1024x128 horizontal ribbon texture
$bmp = New-Object System.Drawing.Bitmap(1024, 128)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Deep rich royal navy blue background
$navy = [System.Drawing.Color]::FromArgb(255, 20, 36, 110)
$g.Clear($navy)

# Draw subtle strap weave pattern lines
$penWeave = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(20, 255, 255, 255), 1)
for ($y = 0; $y -lt 128; $y += 3) {
    $g.DrawLine($penWeave, 0, $y, 1024, $y)
}
$penWeave.Dispose()

# Top and bottom darker seam edges
$penEdge = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(60, 0, 0, 0), 2)
$g.DrawLine($penEdge, 0, 1, 1024, 1)
$g.DrawLine($penEdge, 0, 126, 1024, 126)
$penEdge.Dispose()

# Repeat HEPL pattern 4 times across the 1024px width
# Pattern: [White logo badge with HEPL] -> [Bold white HEPL text]
$font = New-Object System.Drawing.Font('Arial', 42, [System.Drawing.FontStyle]::Bold)
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushNavy = New-Object System.Drawing.SolidBrush($navy)
$brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 220, 38, 38))
$brushLight = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 248, 255))

for ($i = 0; $i -lt 4; $i++) {
    $xOffset = $i * 256
    
    # 1. White badge container for HEPL logo (x=15..95)
    $g.FillRectangle($brushLight, ($xOffset + 12), 16, 100, 96)
    
    # Red & blue globe arc accents inside badge
    $penArcRed = New-Object System.Drawing.Pen($brushRed, 3)
    $penArcNavy = New-Object System.Drawing.Pen($brushNavy, 3)
    $g.DrawArc($penArcRed, ($xOffset + 18), 24, 34, 40, 180, 180)
    $g.DrawArc($penArcNavy, ($xOffset + 22), 28, 30, 36, 0, 180)
    $penArcRed.Dispose()
    $penArcNavy.Dispose()
    
    # Badge HEPL text
    $fontBadge = New-Object System.Drawing.Font('Arial', 18, [System.Drawing.FontStyle]::Bold)
    $g.DrawString('HEPL', $fontBadge, $brushNavy, ($xOffset + 48), 34)
    
    # Subtitle under badge
    $fontSub = New-Object System.Drawing.Font('Arial', 5, [System.Drawing.FontStyle]::Regular)
    $g.DrawString('Helping Enterprises Level Up', $fontSub, $brushNavy, ($xOffset + 14), 86)
    $fontBadge.Dispose()
    $fontSub.Dispose()
    
    # 2. Bold white "HEPL" text directly on navy ribbon (x=130..240)
    $g.DrawString('HEPL', $font, $brushWhite, ($xOffset + 130), 38)
}

$font.Dispose()
$brushWhite.Dispose()
$brushNavy.Dispose()
$brushRed.Dispose()
$brushLight.Dispose()
$g.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Created HD lanyard strap texture: $outPath"
