"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.perPageOptions = void 0;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const AVAILABLE_PER_PAGE = [10, 25, 50, 100, 500];
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.perPageOptions = AVAILABLE_PER_PAGE.reduce((acc, curr) => {
    return [
        ...acc,
        { label: `Pokaż ${curr} wpisów / stronę`, value: curr }
    ];
}, []);
