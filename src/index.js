import printMe from './print.js';
import component from './body.js';

//if using hmr with webpack-dev-server (npm start)
if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
    module.hot.accept('./body.js', function() {
        console.log('Accepting the updated body module!');

        var existingNode = document.getElementById("MainBody");
        if(existingNode)
        {
            var body = component();
            body.id = 'MainBody';
            document.body.replaceChild(body, existingNode);
            var btn = document.getElementById('btnClickMe');
            var data = document.getElementById('hiddenData');
            btn.onclick = function() { printMe(data) };
        }
    })
}


//initializations call only once or break hmr
if(!document.getElementById("MainBody"))
{
    var body = component();
    body.id = 'MainBody';
    document.body.appendChild(body);
}


(function bindBtn() {
    var btn = document.getElementById('btnClickMe');
    var data = document.getElementById('hiddenData');
    btn.onclick = function() { printMe(data) };
})();

