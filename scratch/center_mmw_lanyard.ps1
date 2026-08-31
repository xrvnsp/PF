Add-Type -AssemblyName System.Drawing

$mmwLanyardSrc = 'C:\Users\901969\.gemini\antigravity-ide\brain\67e12b86-53ab-47a5-b88a-a2cb3a138a5c\.user_uploaded\media_1788171439056.png'
$lanyardDest = 'c:\Users\901969\Documents\SP Portfolio\assets\mmw_lanyard.png'

$lImg = [System.Drawing.Image]::FromFile($mmwLanyardSrc)
$lBmp = New-Object System.Drawing.Bitmap(2048, 512)
$lg = [System.Drawing.Graphics]::FromImage($lBmp)
$lg.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$lg.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$lg.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

# Clear with vibrant orange-yellow gradient
$gradRect = New-Object System.Drawing.Rectangle(0, 0, 2048, 512)
$gradBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
    $gradRect,
    [System.Drawing.Color]::FromArgb(255, 255, 75, 10),
    [System.Drawing.Color]::FromArgb(255, 255, 200, 15),
    [System.Drawing.Drawing2D.LinearGradientMode]::Horizontal
)
$lg.FillRectangle($gradBrush, $gradRect)
$gradBrush.Dispose()

# Center the logo and text nicely within the 2048x512 canvas
$lg.DrawImage($lImg, 60, 0, 1928, 512)

$lg.Dispose()
$lImg.Dispose()
$lBmp.Save($lanyardDest, [System.Drawing.Imaging.ImageFormat]::Png)
$lBmp.Dispose()
Write-Host "Updated centered MMW lanyard texture: $lanyardDest"
