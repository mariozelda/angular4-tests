
export class MenuItemModel {

  public label: String;
  public state: String;
  public uri: String;
  public icon: String;
  public class: String;

  constructor(private title: String, private childs = []) {
  }

  isParent(): boolean{
    return this.childs.length>0;
  }

  getChilds(): MenuItemModel[]{
    return this.childs;
  }

}
