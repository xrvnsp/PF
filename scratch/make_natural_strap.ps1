Add-Type -AssemblyName System.Drawing

$outPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

# Create a clean single-tile 512x128 ribbon texture (Aspect 4:1)
$bmp = New-Object System.Drawing.Bitmap(512, 128)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

# Rich royal navy lanyard fabric color
$navy = [System.Drawing.Color]::FromArgb(255, 18, 32, 98)
$g.Clear($navy)

# Draw woven fabric texture ridges
$penWeave = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(18, 255, 255, 255), 1)
for ($y = 0; $y -lt 128; $y += 3) {
    $g.DrawLine($penWeave, 0, $y, 512, $y)
}
$penWeave.Dispose()

# Dark woven edge borders (stitching)
$penEdge = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(80, 0, 0, 0), 3)
$g.DrawLine($penEdge, 0, 1, 512, 1)
$g.DrawLine($penEdge, 0, 126, 512, 126)
$penEdge.Dispose()

# 1. White badge container for HEPL logo (x=24..130)
$brushLight = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 245, 248, 255))
$g.FillRectangle($brushLight, 24, 18, 110, 92)

# Red & navy globe arcs inside badge
$brushRed = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 220, 38, 38))
$brushNavy = New-Object System.Drawing.SolidBrush($navy)
$penArcRed = New-Object System.Drawing.Pen($brushRed, 3.5)
$penArcNavy = New-Object System.Drawing.Pen($brushNavy, 3.5)
$g.DrawArc($penArcRed, 32, 28, 36, 40, 180, 180)
$g.DrawArc($penArcNavy, 36, 32, 32, 36, 0, 180)
$penArcRed.Dispose()
$penArcNavy.Dispose()

# Badge HEPL text
$fontBadge = New-Object System.Drawing.Font('Arial', 20, [System.Drawing.FontStyle]::Bold)
$g.DrawString('HEPL', $fontBadge, $brushNavy, 66, 38)

# Subtitle under badge
$fontSub = New-Object System.Drawing.Font('Arial', 6, [System.Drawing.FontStyle]::Regular)
$g.DrawString('Helping Enterprises Level Up', $fontSub, $brushNavy, 26, 84)
$fontBadge.Dispose()
$fontSub.Dispose()

# 2. Large Bold white "HEPL" text with generous breathing room
$fontMain = New-Object System.Drawing.Font('Arial', 54, [System.Drawing.FontStyle]::Bold)
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$g.DrawString('HEPL', $fontMain, $brushWhite, 180, 32)
$fontMain.Dispose()

$brushWhite.Dispose()
$brushNavy.Dispose()
$brushRed.Dispose()
$brushLight.Dispose()
$g.Dispose()

$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host "Created single-tile natural lanyard texture: $outPath"
