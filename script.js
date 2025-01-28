function fun() {
            let weight = parseFloat(document.getElementById('weight').value)
            let hcm = parseFloat(document.getElementById('height').value)

            if (isNaN(weight) || isNaN(hcm) || weight <= 0 || hcm <= 0) {
                alert('Please enter valid positive numbers for weight and height')
                return
            }

            let hm = hcm / 100
            let bmi = (weight / (hm * hm)).toFixed(2)

            let category = ''
            if (bmi < 18.5) {
                category = "Underweight"
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                category = "Normal weight"
            } else if (bmi >= 25 && bmi <= 29.9) {
                category = 'Overweight'
            } else {
                category = "Obesity"
            }

            document.getElementById('bmi-value').innerHTML = bmi
            document.getElementById('bmi-category').innerHTML = `Category: ${category}`
            document.getElementById('bmi-result').style.display = 'block'
        }
