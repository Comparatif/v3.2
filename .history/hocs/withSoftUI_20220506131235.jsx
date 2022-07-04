
const withSoftUI = ()=> {
    const [controller, dispatch] = useSoftUIController();
    const { miniSidenav, direction, layout, openConfigurator, sidenavColor } = controller;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const [rtlCache, setRtlCache] = useState(null);
    const router = useRouter()
    const pathname = useRouter().pathname
    const isRouteToAccount = pathname.includes("/Account")
  
    // Cache for the rtl
    useMemo(() => {
      const cacheRtl = createCache({
        key: "rtl",
        stylisPlugins: [rtlPlugin],
      });
  
      setRtlCache(cacheRtl);
    }, []);
  
    // Open sidenav when mouse enter on mini sidenav
    const handleOnMouseEnter = () => {
      if (miniSidenav && !onMouseEnter) {
        setMiniSidenav(dispatch, false);
        setOnMouseEnter(true);
      }
    };
  
    // Close sidenav when mouse leave mini sidenav
    const handleOnMouseLeave = () => {
      if (onMouseEnter) {
        setMiniSidenav(dispatch, true);
        setOnMouseEnter(false);
      }
    };
  
    // Change the openConfigurator state
    const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  
    // Setting the dir attribute for the body element
    useEffect(() => {
      document.body.setAttribute("dir", direction);
    }, [direction]);
  
    // Setting page scroll to 0 when changing the route
    useEffect(() => {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }, [pathname]);
  
  
    
  
    useEffect(() => {
      const handleRouteChange = (url) => {
        if (gtag && gtag.pageview) gtag.pageview(url)
      }
      
      router.events.on('routeChangeComplete', handleRouteChange)
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange)
        
      }
    }, [router.events])
  
    enableRightClick ? "" : useEffect(()=> document.addEventListener('contextmenu', event => event.preventDefault()))
  
  
    const configsButton = (
      <SuiBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.5rem"
        height="3.5rem"
        bgColor="white"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="dark"
        sx={{ cursor: "pointer" }}
        onClick={handleConfiguratorOpen}
      >
        <Icon fontSize="default" color="inherit">
          settings
        </Icon>
      </SuiBox>
    );

    return(
direction === "rtl" ? (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={themeRTL}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={brand}
              brandName="Soft UI Dashboard"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  ) : (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={brand}
            brandName="Soft UI Dashboard"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
  )

      }