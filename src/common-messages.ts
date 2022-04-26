export default {
  common: {
    fullName: "{{givenName}} {{familyName}}",
    unknownUser: "Anonymous",

    add: "Add",
    yes: "Yes",
    no: "No",
    create: "Create",
    save: "Save",
    revert: "Revert",
    cancel: "Cancel",
    reload: "Reload",
    continue: "Continue",
    close: "Close",
    delete: "Delete",
    remove: "Remove",
    search: "Search",
    key: "Key",
    value: "Value",
    noSearchResults: "No search results",
    noSearchResultsInstructions: "Click on the search bar above to search",
    clearAllFilters: "Clear all filters",
    next: "Next",
    back: "Back",
    finish: "Finish",
    skipCustomizationAndFinish: "Skip customization and finish",
    export: "Export",
    action: "Action",
    download: "Download",
    resourceFile: "Resource file",
    clear: "Clear",
    clearFile: "Clear this file",
    clearFileExplain: "Are you sure you want to clear this file?",
    on: "On",
    off: "Off",
    edit: "Edit",
    enabled: "Enabled",
    disabled: "Disabled",
    disable: "Disable",
    selectOne: "Select an option",
    select: "Select",
    choose: "Choose...",
    any: "Any",
    none: "None",
    signOut: "Sign out",
    manageAccount: "Manage account",
    serverInfo: "Server info",
    realmInfo: "Realm info",
    help: "Help",
    helpLabel: "More help for '{{label}}'",
    helpEnabled: "Help on",
    helpDisabled: "Help off",
    documentation: "Documentation",
    enableHelpMode: "Enable help mode",
    learnMore: "Learn more",
    show: "Show",
    hide: "Hide",
    showRemaining: "Show ${remaining}",
    more: "{{count}} more",
    test: "Test",
    testConnection: "Test connection",
    name: "Name",
    role: "Role",
    description: "Description",
    type: "Type",
    category: "Category",
    priority: "Priority",
    unexpectedError: "An unexpected error occurred: '{{error}}'",
    retry: "Press here to refresh and continue",
    plus: "Plus",
    minus: "Minus",
    confirm: "Confirm",

    clientScope: {
      default: "Default",
      optional: "Optional",
      none: "None",
    },
    allTypes: "All types",

    home: "Home",
    manage: "Manage",
    clients: "Clients",
    clientScopes: "Client scopes",
    realmRoles: "Realm roles",
    clientRoles: "Client roles",
    users: "Users",
    groups: "Groups",
    sessions: "Sessions",
    events: "Events",
    mappers: "Mappers",
    permissions: "Permissions",
    permissionsList: "Permission list",
    permissionsListIntro:
      "Edit the permission list by clicking the scope-name. It then redirects to the permission details page of the client named <1>{{realm}}</1>",
    usersPermissionsHint:
      "Fine grained permissions for managing all users in realm.  You can define different policies for who is allowed to manage users in the realm.",
    clientsPermissionsHint:
      "Fine grained permissions for administrators that want to manage this client or apply roles defined by this client.",

    permissionsScopeName: "Scope-name",
    permissionsEnabled: "Permissions enabled",
    permissionsDisable: "Disable permissions?",
    permissionsDisableConfirm:
      "If you disable the permissions, all the permissions in the list below will be delete automatically. In addition, the resources and scopes that are related will be removed",
    scopePermissions: {
      clients: {
        "manage-description":
          "Policies that decide if an administrator can manage this client",
        "configure-description":
          "Reduced management permissions for administrator. Cannot set scope, template, or protocol mappers.",
        "view-description":
          "Policies that decide if an administrator can view this client",
        "map-roles-description":
          "Policies that decide if an administrator can map roles defined by this client",
        "map-roles-client-scope-description":
          "Policies that decide if an administrator can apply roles defined by this client to the client scope of another client",
        "map-roles-composite-description":
          "Policies that decide if an administrator can apply roles defined by this client as a composite to another role",
        "token-exchange-description":
          "Policies that decide which clients are allowed exchange tokens for a token that is targeted to this client.",
      },
      users: {
        "view-description":
          "Policies that decide if an administrator can view all users in realm",
        "manage-description":
          "Policies that decide if an administrator can manage all users in the realm",
        "map-roles-description":
          "Policies that decide if administrator can map roles for all users",
        "manage-group-membership-description":
          "Policies that decide if an administrator can manage group membership for all users in the realm.  This is used in conjunction with specific group policy",
        "impersonate-description":
          "Policies that decide if administrator can impersonate other users",
        "user-impersonated-description":
          "Policies that decide which users can be impersonated.  These policies are applied to the user being impersonated.",
      },
    },

    configure: "Configure",
    realmSettings: "Realm settings",
    authentication: "Authentication",
    identityProviders: "Identity providers",
    userFederation: "User federation",

    settings: "Settings",
    details: "Details",

    required: "Required field",
    maxLength: "Max length {{length}}",

    createRealm: "Create Realm",
    recent: "Recent",

    jumpToSection: "Jump to section",

    Sunday: "Sunday",
    Monday: "Monday",
    Tuesday: "Tuesday",
    Wednesday: "Wednesday",
    Thursday: "Thursday",
    Friday: "Friday",
    Saturday: "Saturday",

    assignRole: "Assign role",
    assign: "Assign",
    unAssignRole: "Unassign",
    hideInheritedRoles: "Hide inherited roles",
    assignRolesTo: "Assign roles to {{client}} account",
    inherentFrom: "Inherited from",

    unitLabel: "Select a time unit",
    times: {
      seconds: "Seconds",
      minutes: "Minutes",
      hours: "Hours",
      days: "Days",
      years: "Years",
    },

    attributes: "Attributes",
    addAttribute: "Add an attribute",
    removeAttribute: "Remove attribute",
    keyPlaceholder: "Type a key",
    valuePlaceholder: "Type a value",

    credentials: "Credentials",
    clientId: "Client ID",
    id: "ID",

    addMapper: "Add mapper",
    createNewMapper: "Create new mapper",
    searchForMapper: "Search for mapper",
    mapperType: "Mapper type",
    mappingDeletedSuccess: "Mapping successfully deleted",
    mappingDeletedError: "Could not delete mapping: '{{error}}'",
    mappingDetails: "Mapper details",
    mappingUpdatedSuccess: "Mapping successfully updated",
    mappingUpdatedError: "Could not update mapping: '{{error}}'",
    mappingCreatedSuccess: "Mapping successfully created",
    mappingCreatedError: "Could not create mapping: '{{error}}'",
    deleteMappingTitle: "Delete mapping?",
    deleteMappingConfirm: "Are you sure you want to delete this mapping?",

    emptyMappers: "No mappers",
    emptyMappersInstructions:
      "If you want to add mappers, please click the button below to add some predefined mappers or to configure a new mapper.",
    emptyPrimaryAction: "Add predefined mapper",

    leaveDirtyTitle: "Leave without saving?",
    leaveDirtyConfirm:
      "Do you want to leave this page without saving? Any unsaved changes will be lost.",
    leave: "Leave",
    reorder: "Reorder",

    onDragStart: "Dragging started for item {{item}}",
    onDragMove: "Dragging item {{item}}",
    onDragCancel: "Dragging cancelled. List is unchanged.",
    onDragFinish: "Dragging finished {{list}}",

    notFound: "Could not find the resource that you are looking for",

    password: "Password",
    passwordConfirmation: "Password confirmation",
    temporaryPassword: "Temporary",
    temporaryPasswordHelpText:
      "If enabled, the user must change the password on next login",
  },
};
