Add-Type -AssemblyName System.Drawing

# 1. Digifox / HEPL Lanyard Texture (2048 x 512)
$heplSrcPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788161047433.png'
$heplDestPath = 'c:\Users\901969\Documents\SP Portfolio\assets\hepl_lanyard.png'

$heplSrc = [System.Drawing.Image]::FromFile($heplSrcPath)
$heplBmp = New-Object System.Drawing.Bitmap(2048, 512)
$hg = [System.Drawing.Graphics]::FromImage($heplBmp)
$hg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$hg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$hg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Left half (white bg) is the logo badge (bottom near hook)
# Right half (navy bg) is HEPL text (top near anchor)
# Split source into left and right
$srcW = $heplSrc.Width
$srcH = $heplSrc.Height
$halfW = [int]($srcW / 2)

# Left half source rect (Logo)
$logoRectSrc = New-Object System.Drawing.Rectangle(0, 0, $halfW, $srcH)
# Right half source rect (Text)
$textRectSrc = New-Object System.Drawing.Rectangle($halfW, 0, ($srcW - $halfW), $srcH)

# Fill backgrounds
$brushWhite = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$brushNavy = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 18, 40, 95))

$hg.FillRectangle($brushWhite, 0, 0, 1024, 512)
$hg.FillRectangle($brushNavy, 1024, 0, 1024, 512)

# Draw Logo with 120px padding on left (hook side) so NOTHING gets clipped by hook
# Dest: x=120, y=30, w=820, h=452
$logoDst = New-Object System.Drawing.Rectangle(120, 30, 820, 452)
$hg.DrawImage($heplSrc, $logoDst, $logoRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

# Draw Navy text with padding on right (anchor side)
# Dest: x=1080, y=30, w=840, h=452
$textDst = New-Object System.Drawing.Rectangle(1080, 30, 840, 452)
$hg.DrawImage($heplSrc, $textDst, $textRectSrc, [System.Drawing.GraphicsUnit]::Pixel)

$hg.Dispose()
$heplSrc.Dispose()
$brushWhite.Dispose()
$brushNavy.Dispose()

$heplBmp.Save($heplDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$heplBmp.Dispose()
Write-Host "Created padded HEPL lanyard texture: $heplDestPath"


# 2. Madras MindWorks Lanyard Texture (2048 x 512)
$mmwSrcPath = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788171439056.png'
$mmwDestPath = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_lanyard.png'

$mmwSrc = [System.Drawing.Image]::FromFile($mmwSrcPath)
$mmwBmp = New-Object System.Drawing.Bitmap(2048, 512)
$mg = [System.Drawing.Graphics]::FromImage($mmwBmp)
$mg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$mg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$mg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Vibrant orange-yellow gradient background across full 2048x512
$gradRect = New-Object System.Drawing.Rectangle(0, 0, 2048, 512)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $gradRect,
    [System.Drawing.Color]::FromArgb(255, 255, 65, 5),
    [System.Drawing.Color]::FromArgb(255, 255, 195, 10),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$mg.FillRectangle($gradBrush, $gradRect)
$gradBrush.Dispose()

# Draw the complete MMW Logo + Text on the left half (with 120px padding from left hook)
# And repeat the bold MMW brand on the right half with padding
# Original image has logo on left, text on right
$mW = $mmwSrc.Width
$mH = $mmwSrc.Height

# Place logo + text with generous margins: x=140, y=40, w=1760, h=432
$mmwDst = New-Object System.Drawing.Rectangle(140, 40, 1760, 432)
$mg.DrawImage($mmwSrc, $mmwDst, 0, 0, $mW, $mH, [System.Drawing.GraphicsUnit]::Pixel)

$mg.Dispose()
$mmwSrc.Dispose()
$mmwBmp.Save($mmwDestPath, [System.Drawing.Imaging.ImageFormat]::Png)
$mmwBmp.Dispose()
Write-Host "Created padded MMW lanyard texture: $mmwDestPath"
