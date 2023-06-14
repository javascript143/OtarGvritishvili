localStorage.setItem("username", "fluffyPanda"); // ლოკალურ მეხსიერებაში ობიექტის ახალი წევრის შექმნა საიდანაც setItem-ის პირველი პარამეტრი გახლავთ გასაღები(key) ხოლო მეორე პარამეტრი გახლავთ მნიშვნელობა(value)

let usernameFromDB = localStorage.getItem("username"); // ეს მეთოდი ახორციელებს ლოკალური მეხსიერებიდან მონაცემის წამოღებას გასაღების(key) მეშვეობით ანუ username-ის.

console.log(usernameFromDB);

localStorage.removeItem("dummy"); // მოცემული მეთოდი შლის ერთ ელემენტს ლოკალური მეხსიერებიდან მისთვის, თქვენთვის სასურველი გასაღების(key) მიწოდებით.

localStorage.clear(); // ეს მეთოდი კი შლის ყველა ელემენტს ლოკალური მეხსიერებიდან.
