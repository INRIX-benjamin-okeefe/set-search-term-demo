define(function (require) {
    'use strict';

    const
        ModuleView = require('common/platform/ModuleView');

    return class extends ModuleView {
        started () {
            return super.started().then(() => {
                this.goto('search-chamber');
            });
        }
    };
});
