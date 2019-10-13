---
layout: default
menutitle: Home
title: no
order: 0
menu: main
---

<button type="submit" id="live-button" class="btn btn-lg btn-block btn-primary" onclick="location.href='/live';">View livestream and scoreboard</button>

### About the BAPC

The Benelux Algorithm Programming Contest (BAPC) is a contest in which about 50 teams from leading universities in Luxemburg,
Belgium and the Netherlands are served a series of algorithmic problems/puzzles. The goal of each team is to solve as many
puzzles as possible within the set time limit. Solutions need to be programmed out on a computer and can be submitted to a
semi-automated judging system, after which the solution is checked. The teams that have solved the most puzzles at the end
of the contest qualify for the Northwestern European Regional Contest (NWERC). In this regional competition the teams can
qualify themselves for a ticket to the International Collegiate Programming Contest (ICPC), also known as the World Finals.

The BAPC {{site.year}} will take place on <b>{{site.day}}</b> at the Radboud University in Nijmegen, The Netherlands and is co-organised by <a href='https://www.desda.org/' target="_blank">Desda</a>
and <a href='https://thalia.nu' target="_blank">Thalia</a>.

### During the contest

The scorebord is available during the contest via a [livestream and a web version](/live.html). The jury's solution presentation and the award ceremony are also livestreamed.

### Semi-live and live contest for non-participants

A semi-live contest is available, hosted by one of the DOMjudge developers at [contest.domjudge.org](http://contest.domjudge.org/). Anyone can self-register, the contest will start 30 minutes after the live contest has started. For people attending locally, there is the possibility to participate on the live DOMjudge server at the same time as the participants.

### Previous contests

<p id="previousContests">
    Websites of the previous years are available: {% assign previous = site.year | minus : 1 %}
    {% for i in (2010..previous) %}
        <a href="http://{{i}}.bapc.eu/" target="_blank">{{i}}</a>{% unless forloop.last %},{% endunless %}{% endfor %}.
</p>
