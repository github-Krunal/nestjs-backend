export  class RoutesConstant{
    private static BASEURL="api/";
    public static LOGIN=RoutesConstant.BASEURL+"login"
    public static REGISTRATION=RoutesConstant.BASEURL+"register"
    public static PORTFOLIOSAVE=RoutesConstant.BASEURL+"portfoliosave"
    public static PORTFOLIOGET=RoutesConstant.BASEURL+"portfolioget"
    public static PORTFOLIOUPDATE=RoutesConstant.BASEURL+"portfolioupdate"
    public static FILEUPLOAD=RoutesConstant.BASEURL+"uploadFile"
    public static OPENFILE=RoutesConstant.BASEURL+"uploads/:filename"
}