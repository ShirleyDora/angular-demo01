import { Component } from '@angular/core';

@Component({//组件的装饰器
  selector: 'app-root',//用来定义组件渲染的标签名称，说白了就是组件的名字
  templateUrl: './app.component.html',//用来指定组件的模板文件
  styleUrls: ['./app.component.scss']//一个数组，用来存放组件相关的样式文件
})
export class AppComponent {//在vue中，组件有自己的data和methods等选项，在angular中也有
  public title: string = 'angular-demo01';
  public count: number = 0;
  increment = function () {
    //在组件方法中，可以直接通过this访问组件成员
    this.count++;
  }
}
