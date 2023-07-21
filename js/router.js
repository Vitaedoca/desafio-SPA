export class Router {

    routers = {}

    add(primeira, segunda) {
        this.routers[primeira] = segunda;
    }


    route(event) {


        event = event || window.event

        event.preventDefault();

        window.history.pushState({}, "", event.target.href);

        this.handle();

    }

    handle() {

        const { pathname } = window.location

        const rout = this.routers[pathname]

        fetch(rout)
        .then((el) => el.text())
        .then((html) => {
            document.querySelector("#app").innerHTML = html
        })


    }


}