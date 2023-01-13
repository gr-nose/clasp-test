function doGet() {
  const environmentValue = PropertiesService.getScriptProperties().getProperty("MY_ENV_VALUE");
  console.log("Hello World!");
  console.log(environmentValue);
}
