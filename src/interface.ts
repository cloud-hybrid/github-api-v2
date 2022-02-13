import { Octokit } from "@octokit/rest";

interface API {
    request: Octokit["request"];
    graphql: Octokit["graphql"];
    log: Octokit["log"];
    hook: Octokit["hook"];
    auth: Octokit["auth"];
    actions: Octokit["actions"];
    activity: Octokit["activity"];
    apps: Octokit["apps"];
    billing: Octokit["billing"];
    checks: Octokit["checks"];
    codeScanning: Octokit["codeScanning"];
    codesOfConduct: Octokit["codesOfConduct"];
    emojis: Octokit["emojis"];
    enterpriseAdmin: Octokit["enterpriseAdmin"];
    gists: Octokit["gists"];
    git: Octokit["git"];
    gitignore: Octokit["gitignore"];
    interactions: Octokit["interactions"];
    issues: Octokit["issues"];
    licenses: Octokit["licenses"];
    markdown: Octokit["markdown"];
    meta: Octokit["meta"];
    migrations: Octokit["migrations"];
    orgs: Octokit["orgs"];
    packages: Octokit["packages"];
    projects: Octokit["projects"];
    pulls: Octokit["pulls"];
    rateLimit: Octokit["rateLimit"];
    reactions: Octokit["reactions"];
    repos: Octokit["repos"];
    search: Octokit["search"];
    secretScanning: Octokit["secretScanning"];
    teams: Octokit["teams"];
    users: Octokit["users"];
    rest: Octokit["rest"];
    paginate: Octokit["paginate"];
}

class Interface implements API {
    request: Octokit["request"];
    graphql: Octokit["graphql"];
    log: Octokit["log"];
    hook: Octokit["hook"];
    auth: Octokit["auth"];
    actions: Octokit["actions"];
    activity: Octokit["activity"];
    apps: Octokit["apps"];
    billing: Octokit["billing"];
    checks: Octokit["checks"];
    codeScanning: Octokit["codeScanning"];
    codesOfConduct: Octokit["codesOfConduct"];
    emojis: Octokit["emojis"];
    enterpriseAdmin: Octokit["enterpriseAdmin"];
    gists: Octokit["gists"];
    git: Octokit["git"];
    gitignore: Octokit["gitignore"];
    interactions: Octokit["interactions"];
    issues: Octokit["issues"];
    licenses: Octokit["licenses"];
    markdown: Octokit["markdown"];
    meta: Octokit["meta"];
    migrations: Octokit["migrations"];
    orgs: Octokit["orgs"];
    packages: Octokit["packages"];
    projects: Octokit["projects"];
    pulls: Octokit["pulls"];
    rateLimit: Octokit["rateLimit"];
    reactions: Octokit["reactions"];
    repos: Octokit["repos"];
    search: Octokit["search"];
    secretScanning: Octokit["secretScanning"];
    teams: Octokit["teams"];
    users: Octokit["users"];
    rest: Octokit["rest"];
    paginate: Octokit["paginate"];

    /***
     *
     * @param {Octokit} octokit
     *
     */

    constructor(octokit: Octokit) {
        this.request = octokit.request;
        this.graphql = octokit.graphql;
        this.log = octokit.log;
        this.hook = octokit.hook;
        this.auth = octokit.auth;
        this.actions = octokit.actions;
        this.activity = octokit.activity;
        this.apps = octokit.apps;
        this.billing = octokit.billing;
        this.checks = octokit.checks;
        this.codeScanning = octokit.codeScanning;
        this.codesOfConduct = octokit.codesOfConduct;
        this.emojis = octokit.emojis;
        this.enterpriseAdmin = octokit.enterpriseAdmin;
        this.gists = octokit.gists;
        this.git = octokit.git;
        this.gitignore = octokit.gitignore;
        this.interactions = octokit.interactions;
        this.issues = octokit.issues;
        this.licenses = octokit.licenses;
        this.markdown = octokit.markdown;
        this.meta = octokit.meta;
        this.migrations = octokit.migrations;
        this.orgs = octokit.orgs;
        this.packages = octokit.packages;
        this.projects = octokit.projects;
        this.pulls = octokit.pulls;
        this.rateLimit = octokit.rateLimit;
        this.reactions = octokit.reactions;
        this.repos = octokit.repos;
        this.search = octokit.search;
        this.secretScanning = octokit.secretScanning;
        this.teams = octokit.teams;
        this.users = octokit.users;
        this.rest = octokit.rest;
        this.paginate = octokit.paginate;
    }
}

export { Interface };

export type { API };

export default Interface;