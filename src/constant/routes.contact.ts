export  class RoutesConstant{
    private static BASEURL="api/";
    public static LOGIN=RoutesConstant.BASEURL+"login"
    public static REGISTRATION=RoutesConstant.BASEURL+"register"
    public static PORTFOLIOSAVE=RoutesConstant.BASEURL+"portfoliosave"
    public static PORTFOLIOGET=RoutesConstant.BASEURL+"portfolioget"
    public static PORTFOLIOUPDATE=RoutesConstant.BASEURL+"portfolioupdate"
    public static FILEUPLOAD=RoutesConstant.BASEURL+"uploadFile"
    public static DOWNLOADFILE=RoutesConstant.BASEURL+"download/:filename"
    public static OPENFILE=RoutesConstant.BASEURL+"uploads/:filename"
    public static DELETEFILE=RoutesConstant.BASEURL+"deleteFile/:filename"
    public static PROJECTSAVE=RoutesConstant.BASEURL+"projectsave"
    public static EXPERIENCESAVE=RoutesConstant.BASEURL+"experiencesave"
    public static PROJECTGET=RoutesConstant.BASEURL+"projectget"
    public static EXPERIENCEGET=RoutesConstant.BASEURL+"experienceget"
    public static EXPERIENCEUPDATE=RoutesConstant.BASEURL+"experienceupdate"


}