$services = @(
    "user-service",
    "messaging-service",
    "appointment-service"
    # "api-gateway"
    # "consultation-service"
    # "dashboard-service"
    # "medical-records-service"
    # "notifications-service"
    # "payment-service"
    # "prescriptions-service"
)

foreach ($service in $services) {
    if (Test-Path "$service/package.json") {
        Write-Host "Installing dependencies for $service..."
        Push-Location $service
        npm install
        Pop-Location
    } else {
        Write-Host "Skipping $service (no package.json found)"
    }
}

Write-Host "All dependencies installed."