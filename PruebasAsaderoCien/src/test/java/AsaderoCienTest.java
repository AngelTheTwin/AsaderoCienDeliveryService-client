import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class AsaderoCienTest {

    private WebDriver driver;

    //Localizadores
    By testimoniosLinkLocator = By.linkText("Testimonios");
    By testimoniosPageLocator = By.xpath("//div[@id='testimonios']");
    By informacionLinkLocator = By.linkText("Información");
    By informacionPageLocator = By.xpath("//div[@id='informacion']");
    By inicioLinkLocator = By.linkText("Inicio");
    By inicioPageLocator = By.xpath("//img[@src='/static/media/Portada.219226b1b72531310762.png']");
    By iniciarSesionButtonLocator = By.linkText("Iniciar Sesión");
    By loginPageLocator = By.xpath("//div[@class='sc-bczRLJ idBTyQ']");
    By inputCorreoLocator = By.xpath("//input[@placeholder='Correo']");
    By inputPasswordLocator = By.xpath("//input[@placeholder='Contraseña']");
    By loginButtonLocator = By.xpath("//button[@class='sc-fnykZs irchTb']");
    By homePageLocator = By.xpath("//div[@class='sc-fLlhyt eSIbNA']");
    By registrarseButtonLocator = By.xpath("//span[@class='sc-bjUoiL USSJJ']");
    By registroFormLocator = By.xpath("//nav[@class='sc-hAZoDl cRIqll']");
    By burguerButtonLocator = By.xpath("//div[@id='burguerButton']");
    By logOutButtonLocator = By.xpath("//div[@id='buttonCerrarSesion']");
    By productoButtonLocator = By.xpath("//div[@id='buttonCerrarSesion']");
    By modalLocator = By.xpath("//div[@class='sc-jdAMXn bBgyth']");
    By textAreaLocator = By.xpath("//textarea[@class='sc-bBXxYQ goFary']");
    By agregarCarritoButton = By.xpath("//button[@class='sc-hTtwUo inYaTZ']");
    By carritoButton = By.xpath("//a[@class='sc-kgflAQ hZyfVJ']");
    By productoEnCarritoLocator = By.xpath("//div[@class='sc-eVQfli fbAzyy']");
    By procederAlPago = By.xpath("//button[@class='sc-elYLMi umtOX']");
    By dropDownList_MetodoDePago = By.xpath("//select[@name='tarjeta']");
    By dropDownList_Direccion = By.xpath("//select[@name='direccion']");
    By realizarPedidoLocator = By.xpath("//div[@class='sc-tQuYZ iuMKzT']");
    By pedidoLocator = By.xpath("//div[@class='sc-hKpBwk eAJUOv']");
    By eliminarPedidoButtonLocator = By.xpath("//p[@class='sc-gJwTLC eLSQRe']");
    By noHayPedidosLocator = By.xpath("//p[@class='sc-dvwKko gEGFuF']");
    By covid19ButtonLocator = By.xpath("//div[@id='buttonCovid']");
    By covid19PageLocator = By.xpath("//div[@class='sc-gUAEMC dFvrwP']");
    By direccionesButtonLocator = By.xpath("//div[@id='buttonDirecciones']");
    By nuevaDireccionButtonLocator = By.xpath("//div[@class='sc-cjbZfG edrseY']");
    By titularInputLocator = By.xpath("//input[@name='titular']");
    By calleInputLocator = By.xpath("//input[@name='calle']");
    By dropDownList_Ciudad = By.xpath("//select[@name='ciudad']");
    By coloniaInputLocator = By.xpath("//input[@name='colonia']");
    By codigoPostalInputLocator = By.xpath("//input[@name='codigoPostal']");
    By numeroInputLocator = By.xpath("//input[@class='PhoneInputInput']");
    By guardarDireccionButtonLocator = By.xpath("//div[@class='sc-DdwlG hebDOw']");
    By confirmacionLocator = By.xpath("//div[@class='Toastify__toast-container Toastify__toast-container--bottom-center']");
    By eliminarDireccionButtonLocator = By.xpath("//div[@class='sc-DdwlG sc-dwVMhp hebDOw hxFvhH']");
    By metodosPagoButtonLocator = By.xpath("//div[@id='buttonMetodosPago']");
    By nuevaTarjetaButtonLocator = By.xpath("//div[@class='sc-yeoIj jBsGjg']");
    By numeroTarjetaInputLocator = By.xpath("//input[@id='numeroTarjeta']");
    By titularTarjetaInputLocator = By.xpath("//input[@id='titular']");
    By vigenciaTarjetaInputLocator = By.xpath("//input[@id='vigencia']");
    By cvcTarjetaInputLocator = By.xpath("//input[@id='cvc']");
    By guardarTarjetaButtonLocator = By.xpath("//div[@class='sc-eEOqmf SVqlp']");
    By eliminarTarjetaButtonLocator = By.xpath("//div[@class='sc-jWEIYm buvCoJ']");
    By pedidosButtonLocator = By.xpath("//div[@id='buttonPedidos']");
    By resumenPedidoLocator = By.xpath("//div[@class='sc-bZnhIo dvDZiq']");
    By verPedidosDisponiblesButtonLocator = By.xpath("//div[@class='sc-geuGuN kiOrPv']");
    By tomarPedidoButtonLocator = By.xpath("//div[@class='sc-liHMlC sc-cuqtlR gqJZos ickfLE']");

    @Before
    public void setUp() throws Exception{

        System.setProperty("webdriver.chrome.driver", "./src/test/resources/chromedriver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:3000/");
    }

    @Test
    public void loadInicioSection() throws Exception{
        driver.findElement(inicioLinkLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(inicioPageLocator).isDisplayed());
    }

    @Test
    public void loadTestimoniosSection() throws Exception{

        driver.findElement(testimoniosLinkLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(testimoniosPageLocator).isDisplayed());
    }

    @Test
    public void loadInformacionSection() throws Exception{
        driver.findElement(informacionLinkLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(informacionPageLocator).isDisplayed());
    }

    @Test
    public void loadLoginPage() throws Exception{
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(loginPageLocator).isDisplayed());
    }

    @Test
    public void createAccount() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función createAccount()
        driver.findElement(registrarseButtonLocator).click();
        assertTrue(driver.findElement(registroFormLocator).isDisplayed());
    }

    @Test
    public void loginAndLoadMenu() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(homePageLocator).isDisplayed());
    }

    @Test
    public void logOut() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función logOut()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(logOutButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(inicioPageLocator).isDisplayed());
    }

    @Test
    public void agregarAlCarrito() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función agregarAlCarrito()
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-ezWOiH cbHyAx']"));
        divs.get(1).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(textAreaLocator).sendKeys("Sin cebolla");
        driver.findElement(agregarCarritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(carritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(productoEnCarritoLocator).isDisplayed());
    }

    @Test
    public void pagarCarrito() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función agregarAlCarrito()
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-ezWOiH cbHyAx']"));
        divs.get(1).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(textAreaLocator).sendKeys("Sin cebolla");
        driver.findElement(agregarCarritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(carritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función pagarCarrito()
        driver.findElement(procederAlPago).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        Select selectListMetodoPago = new Select(driver.findElement(dropDownList_MetodoDePago));
        selectListMetodoPago.selectByVisibleText("Terminación en 8988");
        Select selectListDireccion = new Select(driver.findElement(dropDownList_Direccion));
        selectListDireccion.selectByVisibleText("Angel de Jesús - 20 De Noviembre");
        driver.findElement(realizarPedidoLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(pedidoLocator).isDisplayed());
    }

    @Test
    public void eliminarCarrito() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función agregarAlCarrito()
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-ezWOiH cbHyAx']"));
        divs.get(1).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(textAreaLocator).sendKeys("Sin cebolla");
        driver.findElement(agregarCarritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(carritoButton).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función eliminarCarrito()
        driver.findElement(eliminarPedidoButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(noHayPedidosLocator).isDisplayed());
    }

    @Test
    public void loadCovid19Page() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loadCovid19Page()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(covid19ButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(covid19PageLocator).isDisplayed());
    }

    @Test
    public void agregarDireccion() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función agregarDireccion()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(direccionesButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(nuevaDireccionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(titularInputLocator).sendKeys("Daniel Morales");
        driver.findElement(calleInputLocator).sendKeys("24 de Febrero #23");
        Select selectListCiudad = new Select(driver.findElement(dropDownList_Ciudad));
        selectListCiudad.selectByVisibleText("Veracruz");
        driver.findElement(coloniaInputLocator).sendKeys("2 de Abril");
        driver.findElement(codigoPostalInputLocator).sendKeys("91120");
        driver.findElement(numeroInputLocator).sendKeys("2281060606");
        driver.findElement(guardarDireccionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void modificarDireccion() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función modificarDireccion()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(direccionesButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-djvmMF jRQlpa']"));
        divs.get(3).click();
        driver.findElement(titularInputLocator).clear();
        driver.findElement(titularInputLocator).sendKeys("Daniel García");
        driver.findElement(calleInputLocator).clear();
        driver.findElement(calleInputLocator).sendKeys("Carolino Anaya #23");
        Select selectListCiudad = new Select(driver.findElement(dropDownList_Ciudad));
        selectListCiudad.selectByVisibleText("Xalapa");
        driver.findElement(coloniaInputLocator).clear();
        driver.findElement(coloniaInputLocator).sendKeys("Sumidero");
        driver.findElement(codigoPostalInputLocator).clear();
        driver.findElement(codigoPostalInputLocator).sendKeys("20120");
        driver.findElement(numeroInputLocator).clear();
        driver.findElement(numeroInputLocator).sendKeys("2281070707");
        driver.findElement(guardarDireccionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void eliminarDireccion() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función eliminarDireccion()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(direccionesButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-djvmMF jRQlpa']"));
        divs.get(3).click();
        driver.findElement(eliminarDireccionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void agregarMetodoDePago() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función agregarMetodoDePago()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(metodosPagoButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(nuevaTarjetaButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(numeroTarjetaInputLocator).sendKeys("4027665796442028");
        driver.findElement(titularTarjetaInputLocator).sendKeys("Spider man");
        driver.findElement(vigenciaTarjetaInputLocator).sendKeys("2230");
        driver.findElement(cvcTarjetaInputLocator).sendKeys("123");
        driver.findElement(guardarTarjetaButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void modificarMetodoDePago() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función modificarMetodoDePago()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(metodosPagoButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-dWINGa lojyYQ']"));
        divs.get(1).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(numeroTarjetaInputLocator).clear();
        driver.findElement(numeroTarjetaInputLocator).sendKeys("5212665796442028");
        driver.findElement(titularTarjetaInputLocator).clear();
        driver.findElement(titularTarjetaInputLocator).sendKeys("Batman");
        driver.findElement(vigenciaTarjetaInputLocator).clear();
        driver.findElement(vigenciaTarjetaInputLocator).sendKeys("3022");
        driver.findElement(cvcTarjetaInputLocator).clear();
        driver.findElement(cvcTarjetaInputLocator).sendKeys("321");
        driver.findElement(guardarTarjetaButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void eliminarMetodoDePago() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función eliminarDireccion()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(metodosPagoButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-dWINGa lojyYQ']"));
        divs.get(1).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(eliminarTarjetaButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @Test
    public void consultarPedidoCliente() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("daniel");
        driver.findElement(inputPasswordLocator).sendKeys("daniel");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función consultarPedidoCliente()
        driver.findElement(burguerButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(pedidosButtonLocator).click();
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-iXxrte bSJTUF']"));
        divs.get(0).click();
        assertTrue(driver.findElement(resumenPedidoLocator).isDisplayed());
    }

    @Test
    public void consultarPedidoRepartidor() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("abner");
        driver.findElement(inputPasswordLocator).sendKeys("abner");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función consultarPedidoRepartidor()
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-hQRsPl drWHKg']"));
        divs.get(0).click();
        assertTrue(driver.findElement(resumenPedidoLocator).isDisplayed());
    }

    @Test
    public void seleccionarUnPedido() throws Exception{
        //Función loadLoginPage()
        driver.findElement(iniciarSesionButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función loginAndLoadMenu()
        driver.findElement(inputCorreoLocator).sendKeys("abner");
        driver.findElement(inputPasswordLocator).sendKeys("abner");
        driver.findElement(loginButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);

        //Función consultarPedidoRepartidor()
        driver.findElement(verPedidosDisponiblesButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        List<WebElement> divs = driver.findElements(By.xpath("//div[@class='sc-hQRsPl drWHKg']"));
        divs.get(0).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        driver.findElement(tomarPedidoButtonLocator).click();
        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
        assertTrue(driver.findElement(confirmacionLocator).isDisplayed());
    }

    @After
    public void tearDown(){
        driver.quit();
    }

}
