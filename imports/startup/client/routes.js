import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';


FlowRouter.route('/', {
    name: 'home',
    action: function () {
        BlazeLayout.render('layout1', { nav: "nav", hero: "hero", top: "header", main: "landing" });
    }
});

FlowRouter.route('/test/', {
    name: 'blogpost',
    action: function () {
        BlazeLayout.render('layout1', { top: "header", main: "postList" });
    }
});