'use strict';

exports.__esModule = true;
exports.ejWaitingPopup = exports.ejUploadbox = exports.ejTreeView = exports.ejTreeMap = exports.Level = exports.TreeGridColumn = exports.ejTreeGrid = exports.ejTooltip = exports.ejToolbar = exports.ejToggleButton = exports.ejTimePicker = exports.ejTile = exports.ejTagCloud = exports.ejTab = exports.ejSymbolPalette = exports.ejSpreadsheet = exports.Sheet = exports.ejSplitter = exports.ejSplitButton = exports.ejSparkline = exports.ejSlider = exports.ejScroller = exports.ScheduleResource = exports.ejSchedule = exports.ejRte = exports.ejRotator = exports.ejRibbon = exports.ejReportViewer = exports.ejRating = exports.RangeSeries = exports.ejRangeNavigator = exports.ejRadioButton = exports.ejRadialSlider = exports.ejRadialMenu = exports.Item = exports.ejProgressBar = exports.ejPivotSchemaDesigner = exports.ejPivotGrid = exports.ejPivotGauge = exports.ejPivotChart = exports.ejPercentageTextbox = exports.ejPdfViewer = exports.ejOverview = exports.ejNumericTextbox = exports.ejNavigationDrawer = exports.ejMenu = exports.ejMaskEdit = exports.ejMap = exports.Layer = exports.ejListView = exports.ejListBox = exports.ejLinearGauge = exports.KanbanColumn = exports.ejKanban = exports.ejGroupButton = exports.ejGrid = exports.Column = exports.ejGantt = exports.ejFileExplorer = exports.ejDropDownList = exports.ejDigitalGauge = exports.ejDiagram = exports.ejDialog = exports.ejDateTimePicker = exports.ejDatePicker = exports.ejCurrencyTextbox = exports.Template = exports.Util = exports.TemplateProcessor = exports.TemplatingEngine = exports.children = exports.customElement = exports.inlineView = exports.generateBindables = exports.constants = exports.WidgetBase = exports.inject = exports.bindable = exports.customAttribute = exports.ejColorPicker = exports.ejCircularGauge = exports.ejCheckBox = exports.Series = exports.ejChart = exports.ejButton = exports.QualitativeRange = exports.ejBulletGraph = exports.ejBarcode = exports.ejAutocomplete = exports.ejAccordion = exports.EjConfigBuilder = undefined;

var _dec, _dec2, _dec3, _dec4, _class2, _dec5, _dec6, _dec7, _class3, _dec8, _dec9, _dec10, _dec11, _class4, _dec12, _dec13, _dec14, _dec15, _dec16, _class5, _desc, _value, _class6, _descriptor, _dec17, _dec18, _dec19, _class8, _dec20, _dec21, _dec22, _class9, _dec23, _dec24, _dec25, _dec26, _dec27, _class10, _desc2, _value2, _class11, _descriptor2, _dec28, _dec29, _dec30, _class13, _dec31, _dec32, _dec33, _class14, _dec34, _dec35, _dec36, _dec37, _class15, _dec38, _dec39, _dec40, _class16, _dec41, _class17, _dec42, _dec43, _dec44, _dec45, _class18, _desc3, _value3, _class19, _descriptor3, _dec46, _desc4, _value4, _class21, _dec47, _dec48, _dec49, _class22, _dec50, _dec51, _dec52, _class23, _dec53, _dec54, _dec55, _class24, _dec56, _dec57, _dec58, _dec59, _class25, _dec60, _dec61, _dec62, _dec63, _class26, _dec64, _dec65, _dec66, _dec67, _class27, _dec68, _dec69, _dec70, _class28, _dec71, _dec72, _dec73, _dec74, _class29, _dec75, _dec76, _dec77, _dec78, _class30, _dec79, _dec80, _dec81, _dec82, _class31, _desc5, _value5, _class32, _descriptor4, _dec83, _dec84, _dec85, _dec86, _dec87, _class34, _desc6, _value6, _class35, _descriptor5, _dec88, _dec89, _dec90, _class37, _dec91, _dec92, _dec93, _dec94, _dec95, _class38, _desc7, _value7, _class39, _descriptor6, _dec96, _dec97, _dec98, _class41, _dec99, _dec100, _dec101, _dec102, _class42, _dec103, _dec104, _dec105, _class43, _dec106, _dec107, _dec108, _dec109, _class44, _dec110, _dec111, _dec112, _class45, _dec113, _dec114, _dec115, _dec116, _dec117, _class46, _desc8, _value8, _class47, _descriptor7, _dec118, _dec119, _dec120, _class49, _dec121, _dec122, _dec123, _class50, _dec124, _dec125, _dec126, _dec127, _class51, _dec128, _dec129, _dec130, _class52, _dec131, _dec132, _dec133, _dec134, _class53, _dec135, _dec136, _dec137, _dec138, _class54, _dec139, _dec140, _dec141, _class55, _dec142, _dec143, _dec144, _dec145, _class56, _dec146, _dec147, _dec148, _dec149, _class57, _dec150, _dec151, _dec152, _dec153, _class58, _dec154, _dec155, _dec156, _dec157, _class59, _dec158, _dec159, _dec160, _class60, _dec161, _dec162, _dec163, _dec164, _class61, _desc9, _value9, _class62, _descriptor8, _dec165, _dec166, _dec167, _dec168, _dec169, _class64, _desc10, _value10, _class65, _descriptor9, _dec170, _dec171, _dec172, _dec173, _class67, _dec174, _dec175, _dec176, _class68, _dec177, _dec178, _dec179, _dec180, _dec181, _class69, _desc11, _value11, _class70, _descriptor10, _dec182, _dec183, _dec184, _class72, _dec185, _dec186, _dec187, _class73, _dec188, _dec189, _dec190, _dec191, _class74, _dec192, _dec193, _dec194, _dec195, _class75, _dec196, _dec197, _dec198, _class76, _dec199, _dec200, _dec201, _class77, _dec202, _dec203, _dec204, _dec205, _dec206, _class78, _desc12, _value12, _class79, _descriptor11, _dec207, _dec208, _dec209, _class81, _dec210, _dec211, _dec212, _class82, _dec213, _dec214, _dec215, _class83, _dec216, _dec217, _dec218, _dec219, _class84, _dec220, _dec221, _dec222, _class85, _dec223, _dec224, _dec225, _dec226, _class86, _dec227, _dec228, _dec229, _class87, _dec230, _dec231, _dec232, _dec233, _dec234, _class88, _desc13, _value13, _class89, _descriptor12, _dec235, _dec236, _dec237, _dec238, _class91, _dec239, _dec240, _dec241, _dec242, _class92, _dec243, _dec244, _dec245, _dec246, _class93, _dec247, _dec248, _dec249, _dec250, _class94, _dec251, _dec252, _dec253, _class95, _dec254, _dec255, _dec256, _class96, _dec257, _dec258, _dec259, _class97, _dec260, _dec261, _dec262, _class98, _dec263, _dec264, _dec265, _dec266, _dec267, _class99, _desc14, _value14, _class100, _descriptor13, _dec268, _dec269, _dec270, _dec271, _class102, _desc15, _value15, _class103, _descriptor14, _dec272, _dec273, _dec274, _class105, _dec275, _dec276, _dec277, _dec278, _dec279, _class106, _desc16, _value16, _class107, _descriptor15, _dec280, _dec281, _dec282, _class109, _dec283, _dec284, _dec285, _dec286, _class110, _dec287, _dec288, _dec289, _class111;

exports.configure = configure;
exports.generateBindables = generateBindables;
exports.delayed = delayed;
exports.getEventOption = getEventOption;
exports.fireEvent = fireEvent;

var _aureliaTemplating = require('aurelia-templating');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaMetadata = require('aurelia-metadata');

var _aureliaTaskQueue = require('aurelia-task-queue');

require('ej.accordion.min');

require('ej.autocomplete.min');

require('datavisualization/ej.barcode.min');

require('datavisualization/ej.bulletgraph.min');

require('ej.button.min');

require('datavisualization/ej.chart.min');

require('ej.checkbox.min');

require('datavisualization/ej.circulargauge.min');

require('ej.colorpicker.min');

require('ej.editor.min');

require('ej.datepicker.min');

require('ej.datetimepicker.min');

require('ej.dialog.min');

require('datavisualization/ej.diagram.min');

require('datavisualization/ej.digitalgauge.min');

require('ej.dropdownlist.min');

require('ej.fileexplorer.min');

require('ej.gantt.min');

require('ej.grid.min');

require('ej.groupbutton.min');

require('ej.kanban.min');

require('datavisualization/ej.lineargauge.min');

require('ej.listbox.min');

require('ej.listview.min');

require('datavisualization/ej.map.min');

require('ej.maskedit.min');

require('ej.menu.min');

require('ej.navigationdrawer.min');

require('ej.pdfviewer.min');

require('ej.pivotchart.min');

require('ej.pivotgauge.min');

require('ej.pivotgrid.min');

require('ej.pivotschemadesigner.min');

require('ej.progressbar.min');

require('ej.radialmenu.min');

require('ej.radialslider.min');

require('ej.radiobutton.min');

require('datavisualization/ej.rangenavigator.min');

require('ej.rating.min');

require('ej.reportviewer.min');

require('ej.ribbon.min');

require('ej.rotator.min');

require('ej.rte.min');

require('ej.schedule.min');

require('common/ej.scroller.min');

require('ej.slider.min');

require('datavisualization/ej.sparkline.min');

require('ej.splitbutton.min');

require('ej.splitter.min');

require('ej.spreadsheet.min');

require('ej.tab.min');

require('ej.tagcloud.min');

require('ej.tile.min');

require('ej.timepicker.min');

require('ej.togglebutton.min');

require('ej.toolbar.min');

require('ej.tooltip.min');

require('ej.treegrid.min');

require('datavisualization/ej.treemap.min');

require('ej.treeview.min');

require('ej.uploadbox.min');

require('ej.waitingpopup.min');

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EjConfigBuilder = exports.EjConfigBuilder = function () {
  function EjConfigBuilder() {
    _classCallCheck(this, EjConfigBuilder);

    this.resources = [];
    this.useGlobalResources = true;
  }

  EjConfigBuilder.prototype.useAll = function useAll() {
    this.ejGrid().ejChart().ejMap().ejTreeMap().ejRangeNavigator().ejDiagram().ejSparkline().ejSymbolPalette().ejOverview().ejBulletGraph().ejCircularGauge().ejLinearGauge().ejDigitalGauge().ejSplitter().ejDatePicker().ejGantt().ejTreeGrid().ejColorPicker().ejDialog().ejScroller().ejBarcode().ejPdfViewer().ejNumericTextbox().ejCurrencyTextbox().ejPercentageTextbox().ejTimePicker().ejToolbar().ejMenu().ejMaskEdit().ejTreeView().ejKanban().ejRibbon().ejSpreadsheet().ejRating().ejListBox().ejListView().ejNavigationDrawer().ejRotator().ejRTE().ejDropDownList().ejAutocomplete().ejRadialMenu().ejRadialSlider().ejTile().ejAccordion().ejTab().ejCheckBox().ejRadioButton().ejToggleButton().ejSplitButton().ejGroupButton().ejDateTimePicker().ejProgressBar().ejTagCloud().ejButton().ejSlider().ejFileExplorer().ejPivotGrid().ejPivotChart().ejPivotGauge().ejPivotSchemaDesigner().ejWaitingPopup().ejReportViewer().ejSchedule().ejUploadbox().ejTooltip().ejTemplate();
    return this;
  };

  EjConfigBuilder.prototype.withoutGlobalResources = function withoutGlobalResources() {
    this.useGlobalResources = false;
    return this;
  };

  EjConfigBuilder.prototype.ejGrid = function ejGrid() {
    this.resources.push('./grid/grid');
    this.resources.push('./grid/column');
    return this;
  };

  EjConfigBuilder.prototype.ejChart = function ejChart() {
    this.resources.push('./chart/chart');
    this.resources.push('./chart/series');
    return this;
  };

  EjConfigBuilder.prototype.ejMap = function ejMap() {
    this.resources.push('./map/map');
    this.resources.push('./map/layer');
    return this;
  };

  EjConfigBuilder.prototype.ejTreeMap = function ejTreeMap() {
    this.resources.push('./treemap/treemap');
    this.resources.push('./treemap/level');
    return this;
  };

  EjConfigBuilder.prototype.ejRangeNavigator = function ejRangeNavigator() {
    this.resources.push('./rangenavigator/rangenavigator');
    this.resources.push('./rangenavigator/rangeseries');
    return this;
  };

  EjConfigBuilder.prototype.ejDiagram = function ejDiagram() {
    this.resources.push('./diagram/diagram');
    return this;
  };

  EjConfigBuilder.prototype.ejSparkline = function ejSparkline() {
    this.resources.push('./sparkline/sparkline');
    return this;
  };

  EjConfigBuilder.prototype.ejSymbolPalette = function ejSymbolPalette() {
    this.resources.push('./symbolpalette/symbolpalette');
    return this;
  };

  EjConfigBuilder.prototype.ejOverview = function ejOverview() {
    this.resources.push('./overview/overview');
    return this;
  };

  EjConfigBuilder.prototype.ejBulletGraph = function ejBulletGraph() {
    this.resources.push('./bulletgraph/bulletgraph');
    this.resources.push('./bulletgraph/qualitativerange');
    return this;
  };

  EjConfigBuilder.prototype.ejCircularGauge = function ejCircularGauge() {
    this.resources.push('./circulargauge/circulargauge');
    return this;
  };

  EjConfigBuilder.prototype.ejLinearGauge = function ejLinearGauge() {
    this.resources.push('./lineargauge/lineargauge');
    return this;
  };

  EjConfigBuilder.prototype.ejDigitalGauge = function ejDigitalGauge() {
    this.resources.push('./digitalgauge/digitalgauge');
    return this;
  };

  EjConfigBuilder.prototype.ejSplitter = function ejSplitter() {
    this.resources.push('./splitter/splitter');
    return this;
  };

  EjConfigBuilder.prototype.ejDatePicker = function ejDatePicker() {
    this.resources.push('./datepicker/datepicker');
    return this;
  };

  EjConfigBuilder.prototype.ejGantt = function ejGantt() {
    this.resources.push('./gantt/gantt');
    return this;
  };

  EjConfigBuilder.prototype.ejTreeGrid = function ejTreeGrid() {
    this.resources.push('./treegrid/treegrid');
    this.resources.push('./treegrid/treegridcolumn');
    return this;
  };

  EjConfigBuilder.prototype.ejColorPicker = function ejColorPicker() {
    this.resources.push('./colorpicker/colorpicker');
    return this;
  };

  EjConfigBuilder.prototype.ejDialog = function ejDialog() {
    this.resources.push('./dialog/dialog');
    return this;
  };

  EjConfigBuilder.prototype.ejScroller = function ejScroller() {
    this.resources.push('./scroller/scroller');
    return this;
  };

  EjConfigBuilder.prototype.ejBarcode = function ejBarcode() {
    this.resources.push('./barcode/barcode');
    return this;
  };

  EjConfigBuilder.prototype.ejPdfViewer = function ejPdfViewer() {
    this.resources.push('./pdfviewer/pdfviewer');
    return this;
  };

  EjConfigBuilder.prototype.ejNumericTextbox = function ejNumericTextbox() {
    this.resources.push('./numerictextbox/numerictextbox');
    return this;
  };

  EjConfigBuilder.prototype.ejCurrencyTextbox = function ejCurrencyTextbox() {
    this.resources.push('./currencytextbox/currencytextbox');
    return this;
  };

  EjConfigBuilder.prototype.ejPercentageTextbox = function ejPercentageTextbox() {
    this.resources.push('./percentagetextbox/percentagetextbox');
    return this;
  };

  EjConfigBuilder.prototype.ejTimePicker = function ejTimePicker() {
    this.resources.push('./timepicker/timepicker');
    return this;
  };

  EjConfigBuilder.prototype.ejToolbar = function ejToolbar() {
    this.resources.push('./toolbar/toolbar');
    return this;
  };

  EjConfigBuilder.prototype.ejMenu = function ejMenu() {
    this.resources.push('./menu/menu');
    return this;
  };

  EjConfigBuilder.prototype.ejMaskEdit = function ejMaskEdit() {
    this.resources.push('./maskedit/maskedit');
    return this;
  };

  EjConfigBuilder.prototype.ejTreeView = function ejTreeView() {
    this.resources.push('./treeview/treeview');
    return this;
  };

  EjConfigBuilder.prototype.ejKanban = function ejKanban() {
    this.resources.push('./kanban/kanban');
    this.resources.push('./kanban/kanbancolumn');
    return this;
  };

  EjConfigBuilder.prototype.ejRibbon = function ejRibbon() {
    this.resources.push('./ribbon/ribbon');
    return this;
  };

  EjConfigBuilder.prototype.ejSpreadsheet = function ejSpreadsheet() {
    this.resources.push('./spreadsheet/spreadsheet');
    this.resources.push('./spreadsheet/sheet');
    return this;
  };

  EjConfigBuilder.prototype.ejRating = function ejRating() {
    this.resources.push('./rating/rating');
    return this;
  };

  EjConfigBuilder.prototype.ejListBox = function ejListBox() {
    this.resources.push('./listbox/listbox');
    return this;
  };

  EjConfigBuilder.prototype.ejListView = function ejListView() {
    this.resources.push('./listview/listview');
    return this;
  };

  EjConfigBuilder.prototype.ejNavigationDrawer = function ejNavigationDrawer() {
    this.resources.push('./navigationdrawer/navigationdrawer');
    return this;
  };

  EjConfigBuilder.prototype.ejRotator = function ejRotator() {
    this.resources.push('./rotator/rotator');
    return this;
  };

  EjConfigBuilder.prototype.ejRTE = function ejRTE() {
    this.resources.push('./rte/rte');
    return this;
  };

  EjConfigBuilder.prototype.ejDropDownList = function ejDropDownList() {
    this.resources.push('./dropdownlist/dropdownlist');
    return this;
  };

  EjConfigBuilder.prototype.ejAutocomplete = function ejAutocomplete() {
    this.resources.push('./autocomplete/autocomplete');
    return this;
  };

  EjConfigBuilder.prototype.ejRadialMenu = function ejRadialMenu() {
    this.resources.push('./radialmenu/radialmenu');
    this.resources.push('./radialmenu/item');
    return this;
  };

  EjConfigBuilder.prototype.ejRadialSlider = function ejRadialSlider() {
    this.resources.push('./radialslider/radialslider');
    return this;
  };

  EjConfigBuilder.prototype.ejTile = function ejTile() {
    this.resources.push('./tile/tile');
    return this;
  };

  EjConfigBuilder.prototype.ejAccordion = function ejAccordion() {
    this.resources.push('./accordion/accordion');
    return this;
  };

  EjConfigBuilder.prototype.ejTab = function ejTab() {
    this.resources.push('./tab/tab');
    return this;
  };

  EjConfigBuilder.prototype.ejCheckBox = function ejCheckBox() {
    this.resources.push('./checkbox/checkbox');
    return this;
  };

  EjConfigBuilder.prototype.ejRadioButton = function ejRadioButton() {
    this.resources.push('./radiobutton/radiobutton');
    return this;
  };

  EjConfigBuilder.prototype.ejToggleButton = function ejToggleButton() {
    this.resources.push('./togglebutton/togglebutton');
    return this;
  };

  EjConfigBuilder.prototype.ejSplitButton = function ejSplitButton() {
    this.resources.push('./splitbutton/splitbutton');
    return this;
  };

  EjConfigBuilder.prototype.ejGroupButton = function ejGroupButton() {
    this.resources.push('./groupbutton/groupbutton');
    return this;
  };

  EjConfigBuilder.prototype.ejDateTimePicker = function ejDateTimePicker() {
    this.resources.push('./datetimepicker/datetimepicker');
    return this;
  };

  EjConfigBuilder.prototype.ejProgressBar = function ejProgressBar() {
    this.resources.push('./progressbar/progressbar');
    return this;
  };

  EjConfigBuilder.prototype.ejTagCloud = function ejTagCloud() {
    this.resources.push('./tagcloud/tagcloud');
    return this;
  };

  EjConfigBuilder.prototype.ejButton = function ejButton() {
    this.resources.push('./button/button');
    return this;
  };

  EjConfigBuilder.prototype.ejSlider = function ejSlider() {
    this.resources.push('./slider/slider');
    return this;
  };

  EjConfigBuilder.prototype.ejFileExplorer = function ejFileExplorer() {
    this.resources.push('./fileexplorer/fileexplorer');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotGrid = function ejPivotGrid() {
    this.resources.push('./pivotgrid/pivotgrid');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotChart = function ejPivotChart() {
    this.resources.push('./pivotchart/pivotchart');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotGauge = function ejPivotGauge() {
    this.resources.push('./pivotgauge/pivotgauge');
    return this;
  };

  EjConfigBuilder.prototype.ejPivotSchemaDesigner = function ejPivotSchemaDesigner() {
    this.resources.push('./pivotschemadesigner/pivotschemadesigner');
    return this;
  };

  EjConfigBuilder.prototype.ejWaitingPopup = function ejWaitingPopup() {
    this.resources.push('./waitingpopup/waitingpopup');
    return this;
  };

  EjConfigBuilder.prototype.ejReportViewer = function ejReportViewer() {
    this.resources.push('./reportviewer/reportviewer');
    return this;
  };

  EjConfigBuilder.prototype.ejSchedule = function ejSchedule() {
    this.resources.push('./schedule/schedule');
    this.resources.push('./schedule/scheduleresource');
    return this;
  };

  EjConfigBuilder.prototype.ejUploadbox = function ejUploadbox() {
    this.resources.push('./uploadbox/uploadbox');
    return this;
  };

  EjConfigBuilder.prototype.ejTooltip = function ejTooltip() {
    this.resources.push('./tooltip/tooltip');
    return this;
  };

  EjConfigBuilder.prototype.ejTemplate = function ejTemplate() {
    this.resources.push('./common/template');
    return this;
  };

  return EjConfigBuilder;
}();

function configure(aurelia, configCallback) {
  var builder = new EjConfigBuilder();

  if (configCallback !== undefined && typeof configCallback === 'function') {
    configCallback(builder);
  }

  var resources = builder.resources;

  if (builder.useGlobalResources) {
    aurelia.globalResources(resources);
  }
}

var ejAccordion = exports.ejAccordion = (_dec = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'accordion'), _dec2 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec3 = generateBindables('ejAccordion', ['ajaxSettings', 'allowKeyboardNavigation', 'collapseSpeed', 'collapsible', 'cssClass', 'customIcon', 'disabledItems', 'enableAnimation', 'enabled', 'enabledItems', 'enableMultipleOpen', 'enablePersistence', 'enableRTL', 'events', 'expandSpeed', 'headerSize', 'height', 'heightAdjustMode', 'htmlAttributes', 'selectedItemIndex', 'selectedItems', 'showCloseButton', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec4 = (0, _aureliaDependencyInjection.inject)(Element), _dec(_class2 = _dec2(_class2 = _dec3(_class2 = _dec4(_class2 = function (_WidgetBase) {
  _inherits(ejAccordion, _WidgetBase);

  function ejAccordion(element) {
    _classCallCheck(this, ejAccordion);

    var _this = _possibleConstructorReturn(this, _WidgetBase.call(this));

    _this.element = element;
    return _this;
  }

  return ejAccordion;
}(WidgetBase)) || _class2) || _class2) || _class2) || _class2);
var ejAutocomplete = exports.ejAutocomplete = (_dec5 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'autocomplete'), _dec6 = generateBindables('ejAutocomplete', ['addNewText', 'allowAddNew', 'allowSorting', 'animateType', 'autoFocus', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delaySuggestionTimeout', 'delimiterChar', 'emptyResultText', 'enableAutoFill', 'enabled', 'enableDistinct', 'enablePersistence', 'enableRTL', 'fields', 'filterType', 'height', 'highlightSearch', 'itemsCount', 'minCharacter', 'multiColumnSettings', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectValueByKey', 'showEmptyResultText', 'showLoadingIcon', 'showPopupButton', 'showRoundedCorner', 'showResetIcon', 'sortOrder', 'template', 'validationMessage', 'validationRules', 'value', 'visible', 'watermarkText', 'width'], ['value', 'selectValueByKey'], { 'enableRTL': 'enableRtl' }), _dec7 = (0, _aureliaDependencyInjection.inject)(Element), _dec5(_class3 = _dec6(_class3 = _dec7(_class3 = function (_WidgetBase2) {
  _inherits(ejAutocomplete, _WidgetBase2);

  function ejAutocomplete(element) {
    _classCallCheck(this, ejAutocomplete);

    var _this2 = _possibleConstructorReturn(this, _WidgetBase2.call(this));

    _this2.element = element;
    return _this2;
  }

  return ejAutocomplete;
}(WidgetBase)) || _class3) || _class3) || _class3);
var ejBarcode = exports.ejBarcode = (_dec8 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'barcode'), _dec9 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec10 = generateBindables('ejBarcode', ['barcodeToTextGapHeight', 'barHeight', 'darkBarColor', 'displayText', 'enabled', 'encodeStartStopSymbol', 'lightBarColor', 'narrowBarWidth', 'quietZone', 'symbologyType', 'text', 'textColor', 'wideBarWidth', 'xDimension']), _dec11 = (0, _aureliaDependencyInjection.inject)(Element), _dec8(_class4 = _dec9(_class4 = _dec10(_class4 = _dec11(_class4 = function (_WidgetBase3) {
  _inherits(ejBarcode, _WidgetBase3);

  function ejBarcode(element) {
    _classCallCheck(this, ejBarcode);

    var _this3 = _possibleConstructorReturn(this, _WidgetBase3.call(this));

    _this3.element = element;
    return _this3;
  }

  return ejBarcode;
}(WidgetBase)) || _class4) || _class4) || _class4) || _class4);
var ejBulletGraph = exports.ejBulletGraph = (_dec12 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'bullet-graph'), _dec13 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec14 = generateBindables('ejBulletGraph', ['applyRangeStrokeToLabels', 'applyRangeStrokeToTicks', 'captionSettings', 'comparativeMeasureValue', 'enableAnimation', 'flowDirection', 'height', 'isResponsive', 'orientation', 'qualitativeRanges', 'qualitativeRangeSize', 'quantitativeScaleLength', 'quantitativeScaleSettings', 'theme', 'tooltipSettings', 'value', 'width']), _dec15 = (0, _aureliaDependencyInjection.inject)(Element), _dec16 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'qualitative-range'), _dec12(_class5 = _dec13(_class5 = _dec14(_class5 = _dec15(_class5 = (_class6 = function (_WidgetBase4) {
  _inherits(ejBulletGraph, _WidgetBase4);

  function ejBulletGraph(element) {
    _classCallCheck(this, ejBulletGraph);

    var _this4 = _possibleConstructorReturn(this, _WidgetBase4.call(this));

    _initDefineProp(_this4, 'qualitativeRanges', _descriptor, _this4);

    _this4.element = element;
    _this4.hasChildProperty = true;
    _this4.childPropertyName = 'qualitativeRanges';
    return _this4;
  }

  return ejBulletGraph;
}(WidgetBase), (_descriptor = _applyDecoratedDescriptor(_class6.prototype, 'qualitativeRanges', [_dec16], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class6)) || _class5) || _class5) || _class5) || _class5);
var QualitativeRange = exports.QualitativeRange = (_dec17 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec18 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'qualitative-range'), _dec19 = generateBindables('qualitativeRanges', ['rangeEnd', 'rangeOpacity', 'rangeStroke']), _dec17(_class8 = _dec18(_class8 = _dec19(_class8 = function QualitativeRange() {
  _classCallCheck(this, QualitativeRange);
}) || _class8) || _class8) || _class8);
var ejButton = exports.ejButton = (_dec20 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'button'), _dec21 = generateBindables('ejButton', ['contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'repeatButton', 'showRoundedCorner', 'size', 'suffixIcon', 'text', 'timeInterval', 'type', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec22 = (0, _aureliaDependencyInjection.inject)(Element), _dec20(_class9 = _dec21(_class9 = _dec22(_class9 = function (_WidgetBase5) {
  _inherits(ejButton, _WidgetBase5);

  function ejButton(element) {
    _classCallCheck(this, ejButton);

    var _this5 = _possibleConstructorReturn(this, _WidgetBase5.call(this));

    _this5.element = element;
    return _this5;
  }

  return ejButton;
}(WidgetBase)) || _class9) || _class9) || _class9);
var ejChart = exports.ejChart = (_dec23 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'chart'), _dec24 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec25 = generateBindables('ejChart', ['annotations', 'backGroundImageUrl', 'border', 'exportSettings', 'chartArea', 'columnDefinitions', 'commonSeriesOptions', 'crosshair', 'depth', 'enable3D', 'enableCanvasRendering', 'enableRotation', 'indicators', 'isResponsive', 'legend', 'locale', 'palette', 'Margin', 'perspectiveAngle', 'primaryXAxis', 'primaryYAxis', 'rotation', 'rowDefinitions', 'series', 'sideBySideSeriesPlacement', 'size', 'theme', 'tilt', 'title', 'wallSize', 'zooming']), _dec26 = (0, _aureliaDependencyInjection.inject)(Element), _dec27 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'series'), _dec23(_class10 = _dec24(_class10 = _dec25(_class10 = _dec26(_class10 = (_class11 = function (_WidgetBase6) {
  _inherits(ejChart, _WidgetBase6);

  function ejChart(element) {
    _classCallCheck(this, ejChart);

    var _this6 = _possibleConstructorReturn(this, _WidgetBase6.call(this));

    _initDefineProp(_this6, 'series', _descriptor2, _this6);

    _this6.element = element;
    _this6.hasChildProperty = true;
    _this6.childPropertyName = 'series';
    return _this6;
  }

  return ejChart;
}(WidgetBase), (_descriptor2 = _applyDecoratedDescriptor(_class11.prototype, 'series', [_dec27], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class11)) || _class10) || _class10) || _class10) || _class10);
var Series = exports.Series = (_dec28 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec29 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'series'), _dec30 = generateBindables('series', ['bearFillColor', 'border', 'bullFillColor', 'columnWidth', 'columnSpacing', 'dashArray', 'dataSource', 'doughnutCoefficient', 'doughnutSize', 'drawType', 'enableAnimation', 'enableSmartLabels', 'endAngle', 'explode', 'explodeAll', 'explodeIndex', 'explodeOffset', 'fill', 'font', 'funnelHeight', 'funnelWidth', 'gapRatio', 'isClosed', 'isStacking', 'isTransposed', 'labelPosition', 'lineCap', 'lineJoin', 'marker', 'name', 'opacity', 'palette', 'pieCoefficient', 'emptyPointSettings', 'positiveFill', 'connectorLine', 'errorBar', 'points', 'pyramidMode', 'query', 'startAngle', 'tooltip', 'type', 'visibility', 'visibleOnLegend', 'xAxisName', 'xName', 'yAxisName', 'yName', 'high', 'low', 'open', 'close', 'size', 'trendlines', 'highlightSettings', 'selectionSettings']), _dec28(_class13 = _dec29(_class13 = _dec30(_class13 = function Series() {
  _classCallCheck(this, Series);
}) || _class13) || _class13) || _class13);
var ejCheckBox = exports.ejCheckBox = (_dec31 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'check-box'), _dec32 = generateBindables('ejCheckBox', ['checked', 'checkState', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'enableTriState', 'htmlAttributes', 'id', 'idPrefix', 'name', 'showRoundedCorner', 'size', 'text', 'validationMessage', 'validationRules', 'value'], ['checked'], { 'enableRTL': 'enableRtl' }), _dec33 = (0, _aureliaDependencyInjection.inject)(Element), _dec31(_class14 = _dec32(_class14 = _dec33(_class14 = function (_WidgetBase7) {
  _inherits(ejCheckBox, _WidgetBase7);

  function ejCheckBox(element) {
    _classCallCheck(this, ejCheckBox);

    var _this7 = _possibleConstructorReturn(this, _WidgetBase7.call(this));

    _this7.element = element;
    return _this7;
  }

  return ejCheckBox;
}(WidgetBase)) || _class14) || _class14) || _class14);
var ejCircularGauge = exports.ejCircularGauge = (_dec34 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'circular-gauge'), _dec35 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec36 = generateBindables('ejCircularGauge', ['animationSpeed', 'backgroundColor', 'distanceFromCorner', 'enableAnimation', 'frame', 'gaugePosition', 'height', 'interiorGradient', 'isRadialGradient', 'isResponsive', 'maximum', 'minimum', 'outerCustomLabelPosition', 'radius', 'readOnly', 'scales', 'theme', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), _dec37 = (0, _aureliaDependencyInjection.inject)(Element), _dec34(_class15 = _dec35(_class15 = _dec36(_class15 = _dec37(_class15 = function (_WidgetBase8) {
  _inherits(ejCircularGauge, _WidgetBase8);

  function ejCircularGauge(element) {
    _classCallCheck(this, ejCircularGauge);

    var _this8 = _possibleConstructorReturn(this, _WidgetBase8.call(this));

    _this8.element = element;
    return _this8;
  }

  return ejCircularGauge;
}(WidgetBase)) || _class15) || _class15) || _class15) || _class15);
var ejColorPicker = exports.ejColorPicker = (_dec38 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'color-picker'), _dec39 = generateBindables('ejColorPicker', ['buttonText', 'buttonMode', 'columns', 'cssClass', 'custom', 'displayInline', 'enabled', 'enableOpacity', 'htmlAttributes', 'modelType', 'opacityValue', 'palette', 'presetType', 'showApplyCancel', 'showClearButton', 'showPreview', 'showRecentColors', 'showSwitcher', 'showTooltip', 'toolIcon', 'tooltipText', 'value'], ['value', 'opacityValue']), _dec40 = (0, _aureliaDependencyInjection.inject)(Element), _dec38(_class16 = _dec39(_class16 = _dec40(_class16 = function (_WidgetBase9) {
  _inherits(ejColorPicker, _WidgetBase9);

  function ejColorPicker(element) {
    _classCallCheck(this, ejColorPicker);

    var _this9 = _possibleConstructorReturn(this, _WidgetBase9.call(this));

    _this9.element = element;
    return _this9;
  }

  return ejColorPicker;
}(WidgetBase)) || _class16) || _class16) || _class16);
exports.customAttribute = _aureliaTemplating.customAttribute;
exports.bindable = _aureliaTemplating.bindable;
exports.inject = _aureliaDependencyInjection.inject;
exports.WidgetBase = WidgetBase;
exports.constants = constants;
exports.generateBindables = generateBindables;
exports.inlineView = _aureliaTemplating.inlineView;
exports.customElement = _aureliaTemplating.customElement;
exports.children = _aureliaTemplating.children;
exports.TemplatingEngine = _aureliaTemplating.TemplatingEngine;
exports.TemplateProcessor = TemplateProcessor;
exports.Util = Util;
var constants = exports.constants = {
  eventPrefix: 'e-on-',
  bindablePrefix: 'e-',
  attributePrefix: 'ej-',
  elementPrefix: 'ej-',
  aureliaTemplateString: '<template><slot></slot></template>'
};

function generateBindables(controlName, inputs, twoWayProperties, abbrevProperties) {
  return function (target, key, descriptor) {
    var behaviorResource = _aureliaMetadata.metadata.getOrCreateOwn(_aureliaMetadata.metadata.resource, _aureliaTemplating.HtmlBehaviorResource, target);
    var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
    var util = container.get(Util);
    inputs.push('options');
    var len = inputs.length;
    target.prototype.controlName = controlName;
    target.prototype.twoWays = twoWayProperties ? twoWayProperties : [];
    target.prototype.abbrevProperties = abbrevProperties ? abbrevProperties : [];
    if (len) {
      target.prototype.controlProperties = inputs;
      for (var i = 0; i < len; i++) {
        var option = inputs[i];
        if (abbrevProperties && option in abbrevProperties) {
          option = abbrevProperties[option];
        }
        var nameOrConfigOrTarget = {
          name: util.getBindablePropertyName(option)
        };
        var prop = new _aureliaTemplating.BindableProperty(nameOrConfigOrTarget);
        prop.registerWith(target, behaviorResource, descriptor);
      }
    }
  };
}

function delayed() {
  return function (target, key, descriptor) {
    var taskQueue = (_aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container()).get(_aureliaTaskQueue.TaskQueue);
    var ptr = descriptor.value;

    descriptor.value = function () {
      var _this10 = this;

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (this.childPropertyName) {
        taskQueue.queueTask(function () {
          return ptr.apply(_this10, args);
        });
      } else {
        ptr.apply(this, args);
      }
    };

    return descriptor;
  };
}

function getEventOption(element) {
  var name = void 0;
  var attr = void 0;
  var attributes = element.attributes;
  var option = {};
  var container = _aureliaDependencyInjection.Container.instance || new _aureliaDependencyInjection.Container();
  var util = container.get(Util);

  var _loop = function _loop(i, len) {
    attr = attributes[i];
    name = attr.name;
    if (!name.startsWith(constants.eventPrefix)) {
      return 'continue';
    }
    var actualEventName = name.split('.')[0];
    var eventName = util._unhyphenate(actualEventName.split(constants.eventPrefix)[1]);
    option[eventName] = function (e) {
      return fireEvent(element, actualEventName, e);
    };
  };

  for (var i = 0, len = attributes.length; i < len; i++) {
    var _ret = _loop(i, len);

    if (_ret === 'continue') continue;
  }
  return option;
}
function fireEvent(element, name) {
  var data = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var event = new CustomEvent(name, {
    detail: data,
    bubbles: true
  });
  element.dispatchEvent(event);
  return event;
}

var TemplateProcessor = exports.TemplateProcessor = (_dec41 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TemplatingEngine, Util), _dec41(_class17 = function () {
  function TemplateProcessor(context, templateEngine) {
    _classCallCheck(this, TemplateProcessor);

    this.context = context;
    this.templatingEngine = templateEngine;
    this.util = new Util();
  }

  TemplateProcessor.prototype.initTemplate = function initTemplate() {
    var proxy = this;
    ej.template.render = function (self, selector, data, index) {
      return proxy.renderStringTemplate(self, selector, data, index);
    };
  };

  TemplateProcessor.prototype.initWidgetDependancies = function initWidgetDependancies() {
    if (this.context.widget.aureliaTemplate) {
      this.compileTemplate(this.context.widget.element);
    }
    var proxy = this.context;
    var element = this.context.widget.element;
    element.on(this.context.widget.pluginName + 'refresh', function () {
      if (proxy.widget.aureliaTemplate) {
        proxy.templateProcessor.compileTemplate(element);
      }
    });
  };

  TemplateProcessor.prototype.renderStringTemplate = function renderStringTemplate(self, selector, data, index) {
    var templateObject = self.aureliaTemplate;
    if (!templateObject || !templateObject[selector]) {
      templateObject = templateObject || {};
      templateObject[selector] = { key: ej.getGuid('aurtmpl'), itemData: [], views: [] };
      self.aureliaTemplate = templateObject;
    }
    var scope = templateObject[selector];
    if (this.util.hasValue(index)) {
      scope.itemData[index] = data;
    } else {
      scope.itemData = [data];
    }
    var actElement = $(selector).html();
    var tempElement = "<div class='" + templateObject[selector].key + " ej-aurelia-template'>" + actElement + '</div>';
    return tempElement;
  };

  TemplateProcessor.prototype.compileTemplate = function compileTemplate(element) {
    var templates = $(element).find('.ej-aurelia-template');
    var templateObject = this.context.widget.aureliaTemplate;
    for (var template in templateObject) {
      var tmplElement = templates.filter('.' + templateObject[template].key);
      if (tmplElement.length) {
        for (var i = 0; i < tmplElement.length; i++) {
          var view = this.templatingEngine.enhance(tmplElement[i]);
          view.bind(templateObject[template].itemData[i]);
          templateObject[template].views[i] = view;
        }
      } else {
        this.unbindViews(templateObject[template]);
        delete templateObject[template];
      }
    }
  };

  TemplateProcessor.prototype.clearTempalte = function clearTempalte() {
    var templateObject = this.context.widget.aureliaTemplate;
    if (templateObject && Object.keys(templateObject).length) {
      for (var t in templateObject) {
        this.unbindViews(templateObject[t]);
        delete templateObject[t];
      }
    }
  };

  TemplateProcessor.prototype.unbindViews = function unbindViews(obj) {
    for (var i = 0; i < obj.views.length; i++) {
      var view = obj.views[i];
      view.unbind();
    }
  };

  return TemplateProcessor;
}()) || _class17);
var Template = exports.Template = (_dec42 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'template'), _dec43 = (0, _aureliaTemplating.noView)(), _dec44 = (0, _aureliaTemplating.processContent)(function (compiler, resources, element, instruction) {
  var html = element.innerHTML;
  if (html !== '') {
    instruction.template = html;
  }
  element.innerHTML = '';
}), _dec45 = (0, _aureliaDependencyInjection.inject)(_aureliaTemplating.TargetInstruction), _dec42(_class18 = _dec43(_class18 = _dec44(_class18 = _dec45(_class18 = (_class19 = function Template(target) {
  _classCallCheck(this, Template);

  _initDefineProp(this, 'template', _descriptor3, this);

  this.template = target.elementInstruction.template;
}, (_descriptor3 = _applyDecoratedDescriptor(_class19.prototype, 'template', [_aureliaTemplating.bindable], {
  enumerable: true,
  initializer: null
})), _class19)) || _class18) || _class18) || _class18) || _class18);

var Util = exports.Util = function () {
  function Util() {
    _classCallCheck(this, Util);
  }

  Util.prototype.getBindablePropertyName = function getBindablePropertyName(propertyName) {
    var name = '' + constants.bindablePrefix + propertyName;
    return this._unhyphenate(name);
  };

  Util.prototype._unhyphenate = function _unhyphenate(name) {
    return name.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  Util.prototype.getOptions = function getOptions(model, properties) {
    var bindableproperites = {};
    var value = void 0;
    for (var _iterator = properties, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var prop = _ref;

      if (model.abbrevProperties && prop in model.abbrevProperties) {
        value = model[this.getBindablePropertyName(model.abbrevProperties[prop])];
      } else {
        value = model[this.getBindablePropertyName(prop)];
      }
      if (this.hasValue(value)) {
        if (typeof value === 'string') {
          value = this.processData(value);
        }
        bindableproperites[prop] = value;
      }
    }
    return bindableproperites;
  };

  Util.prototype.getControlPropertyName = function getControlPropertyName(options, propertyName) {
    var property = void 0;
    for (var _iterator2 = options.controlProperties, _isArray2 = Array.isArray(_iterator2), _i2 = 0, _iterator2 = _isArray2 ? _iterator2 : _iterator2[Symbol.iterator]();;) {
      var _ref2;

      if (_isArray2) {
        if (_i2 >= _iterator2.length) break;
        _ref2 = _iterator2[_i2++];
      } else {
        _i2 = _iterator2.next();
        if (_i2.done) break;
        _ref2 = _i2.value;
      }

      var prop = _ref2;

      if (propertyName === this.getBindablePropertyName(prop)) {
        property = prop;
        break;
      }
    }
    return property;
  };

  Util.prototype.hasValue = function hasValue(prop) {
    return typeof prop !== 'undefined' && prop !== null;
  };

  Util.prototype.processData = function processData(value) {
    if (value === 'true') {
      return true;
    } else if (value === 'false') {
      return false;
    } else if (+value + '' === value) {
      return +value;
    }
    return value;
  };

  return Util;
}();

var firstValue = {};
var WidgetBase = exports.WidgetBase = (_dec46 = delayed(), (_class21 = function () {
  function WidgetBase() {
    _classCallCheck(this, WidgetBase);
  }

  WidgetBase.prototype.createWidget = function createWidget(option) {
    var _this11 = this;

    this.allOption = this.getWidgetOptions(option.element);
    if (!this.ejOptions && !this.isEditor) {
      this.createTwoWays();
    }
    this.widget = jQuery($(option.element))[this.controlName](this.allOption).data(this.controlName);
    if (this.templateProcessor) {
      this.templateProcessor.initWidgetDependancies();
    }
    if (this.isEditor) {
      this.widget.model._change = function (evt) {
        if ('eValue' in _this11) {
          _this11[_this11.util.getBindablePropertyName('value')] = evt.value;
        }
      };
    }
  };

  WidgetBase.prototype.createTwoWays = function createTwoWays() {
    var model = this.allOption;
    var twoWays = this.twoWays;
    var len = twoWays.length;
    for (var i = 0; i < len; i++) {
      var prop = twoWays[i];
      ej.createObject(prop, this.addTwoways(prop), model);
    }
  };

  WidgetBase.prototype.addTwoways = function addTwoways(prop) {
    var model = this;
    var value = firstValue;
    return function (newVal, isApp) {
      if (value === firstValue) {
        var viewModelProp = model.util.getBindablePropertyName(prop);
        value = model[viewModelProp];
        if (value === undefined) {
          value = this.defaults[prop];
        }
        return value;
      }
      if (newVal === undefined) {
        return value;
      }
      if (value === newVal) {
        return null;
      }
      value = newVal;
      if (!isApp && model.util.hasValue(newVal)) {
        var _viewModelProp = model.util.getBindablePropertyName(prop);
        model[_viewModelProp] = newVal;
      }
      return null;
    };
  };

  WidgetBase.prototype.getWidgetOptions = function getWidgetOptions(element) {
    var propOptions = void 0;
    if (this.ejOptions) {
      propOptions = this.ejOptions;
    } else {
      propOptions = this.util.getOptions(this, this.controlProperties);
    }
    var eventOption = getEventOption(element);
    if (this.hasChildProperty) {
      this.getChildProperties(propOptions);
    }
    return Object.assign({}, propOptions, eventOption);
  };

  WidgetBase.prototype.getChildProperties = function getChildProperties(options) {
    var PropertyName = this.childPropertyName;
    var childCollection = this[PropertyName];
    var len = childCollection.length;
    if (len) {
      options[PropertyName] = [];
      var childProperties = childCollection[0].controlProperties;
      for (var i = 0; i < len; i++) {
        options[PropertyName].push(this.util.getOptions(childCollection[i], childProperties));
      }
    }
  };

  WidgetBase.prototype.attached = function attached() {
    if (this.templateProcessor) {
      this[this.childPropertyName].forEach(function (template) {
        return template.setTemplates();
      });
    }
    this.util = new Util();
    this.createWidget({ element: this.element });
  };

  WidgetBase.prototype.propertyChanged = function propertyChanged(property, newValue, oldValue) {
    if (this.widget) {
      var modelValue = void 0;
      var prop = this.util.getControlPropertyName(this, property);
      if (prop) {
        if (prop !== 'options') {
          modelValue = this.widget.model[prop];
          var isTwoway = typeof modelValue === 'function';
          if (isTwoway) {
            modelValue = modelValue();
          }
          if (modelValue !== newValue) {
            if (isTwoway) {
              newValue = this.addTwoways(prop);
            }
            this.widget.option(prop, newValue);
          }
        } else {
          this.widget.option(newValue);
        }
      }
    }
  };

  WidgetBase.prototype.detached = function detached() {
    if (this.templateProcessor) {
      this.templateProcessor.clearTempalte();
    }
    if (this.widget) {
      this.widget.destroy();
    }
  };

  return WidgetBase;
}(), (_applyDecoratedDescriptor(_class21.prototype, 'attached', [_dec46], Object.getOwnPropertyDescriptor(_class21.prototype, 'attached'), _class21.prototype)), _class21));
var ejCurrencyTextbox = exports.ejCurrencyTextbox = (_dec47 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'currency-textbox'), _dec48 = generateBindables('ejCurrencyTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec49 = (0, _aureliaDependencyInjection.inject)(Element), _dec47(_class22 = _dec48(_class22 = _dec49(_class22 = function (_WidgetBase10) {
  _inherits(ejCurrencyTextbox, _WidgetBase10);

  function ejCurrencyTextbox(element) {
    _classCallCheck(this, ejCurrencyTextbox);

    var _this12 = _possibleConstructorReturn(this, _WidgetBase10.call(this));

    _this12.isEditor = true;
    _this12.element = element;
    return _this12;
  }

  return ejCurrencyTextbox;
}(WidgetBase)) || _class22) || _class22) || _class22);
var ejDatePicker = exports.ejDatePicker = (_dec50 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-picker'), _dec51 = generateBindables('ejDatePicker', ['allowEdit', 'allowDrillDown', 'blackoutDates', 'buttonText', 'cssClass', 'dateFormat', 'dayHeaderFormat', 'depthLevel', 'displayInline', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'fields', 'headerFormat', 'height', 'highlightSection', 'highlightWeekend', 'htmlAttributes', 'locale', 'maxDate', 'minDate', 'readOnly', 'showDisabledRange', 'showFooter', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'showTooltip', 'specialDates', 'startDay', 'startLevel', 'stepMonths', 'tooltipFormat', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': 'enableRtl' }), _dec52 = (0, _aureliaDependencyInjection.inject)(Element), _dec50(_class23 = _dec51(_class23 = _dec52(_class23 = function (_WidgetBase11) {
  _inherits(ejDatePicker, _WidgetBase11);

  function ejDatePicker(element) {
    _classCallCheck(this, ejDatePicker);

    var _this13 = _possibleConstructorReturn(this, _WidgetBase11.call(this));

    _this13.isEditor = true;
    _this13.element = element;
    return _this13;
  }

  return ejDatePicker;
}(WidgetBase)) || _class23) || _class23) || _class23);
var ejDateTimePicker = exports.ejDateTimePicker = (_dec53 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'date-time-picker'), _dec54 = generateBindables('ejDateTimePicker', ['buttonText', 'cssClass', 'dateTimeFormat', 'dayHeaderFormat', 'depthLevel', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'headerFormat', 'height', 'htmlAttributes', 'interval', 'locale', 'maxDateTime', 'minDateTime', 'popupPosition', 'readOnly', 'showOtherMonths', 'showPopupButton', 'showRoundedCorner', 'startDay', 'startLevel', 'stepMonths', 'timeDisplayFormat', 'timeDrillDown', 'timePopupWidth', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value'], { 'enableRTL': 'enableRtl' }), _dec55 = (0, _aureliaDependencyInjection.inject)(Element), _dec53(_class24 = _dec54(_class24 = _dec55(_class24 = function (_WidgetBase12) {
  _inherits(ejDateTimePicker, _WidgetBase12);

  function ejDateTimePicker(element) {
    _classCallCheck(this, ejDateTimePicker);

    var _this14 = _possibleConstructorReturn(this, _WidgetBase12.call(this));

    _this14.isEditor = true;
    _this14.element = element;
    return _this14;
  }

  return ejDateTimePicker;
}(WidgetBase)) || _class24) || _class24) || _class24);
var ejDialog = exports.ejDialog = (_dec56 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'dialog'), _dec57 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec58 = generateBindables('ejDialog', ['actionButtons', 'allowDraggable', 'allowKeyboardNavigation', 'animation', 'closeOnEscape', 'containment', 'contentType', 'contentUrl', 'cssClass', 'enableAnimation', 'enabled', 'enableModal', 'enablePersistence', 'enableResize', 'enableRTL', 'faviconCSS', 'height', 'isResponsive', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'position', 'showHeader', 'showOnInit', 'showRoundedCorner', 'target', 'title', 'tooltip', 'width', 'zIndex', 'showFooter', 'footerTemplateId'], [], { 'enableRTL': 'enableRtl' }), _dec59 = (0, _aureliaDependencyInjection.inject)(Element), _dec56(_class25 = _dec57(_class25 = _dec58(_class25 = _dec59(_class25 = function (_WidgetBase13) {
  _inherits(ejDialog, _WidgetBase13);

  function ejDialog(element) {
    _classCallCheck(this, ejDialog);

    var _this15 = _possibleConstructorReturn(this, _WidgetBase13.call(this));

    _this15.element = element;
    return _this15;
  }

  return ejDialog;
}(WidgetBase)) || _class25) || _class25) || _class25) || _class25);
var ejDiagram = exports.ejDiagram = (_dec60 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'diagram'), _dec61 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec62 = generateBindables('ejDiagram', ['backgroundColor', 'backgroundImage', 'bridgeDirection', 'commandManager', 'connectors', 'connectorTemplate', 'constraints', 'contextMenu', 'dataSourceSettings', 'defaultSettings', 'drawType', 'enableAutoScroll', 'enableContextMenu', 'height', 'historyManager', 'layout', 'locale', 'nodes', 'nodeTemplate', 'pageSettings', 'scrollSettings', 'selectedItems', 'showTooltip', 'snapSettings', 'tool', 'tooltip', 'width', 'zoomFactor']), _dec63 = (0, _aureliaDependencyInjection.inject)(Element), _dec60(_class26 = _dec61(_class26 = _dec62(_class26 = _dec63(_class26 = function (_WidgetBase14) {
  _inherits(ejDiagram, _WidgetBase14);

  function ejDiagram(element) {
    _classCallCheck(this, ejDiagram);

    var _this16 = _possibleConstructorReturn(this, _WidgetBase14.call(this));

    _this16.element = element;
    return _this16;
  }

  return ejDiagram;
}(WidgetBase)) || _class26) || _class26) || _class26) || _class26);
var ejDigitalGauge = exports.ejDigitalGauge = (_dec64 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'digital-gauge'), _dec65 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec66 = generateBindables('ejDigitalGauge', ['frame', 'height', 'isResponsive', 'items', 'matrixSegmentData', 'segmentData', 'themes', 'value', 'width'], ['value']), _dec67 = (0, _aureliaDependencyInjection.inject)(Element), _dec64(_class27 = _dec65(_class27 = _dec66(_class27 = _dec67(_class27 = function (_WidgetBase15) {
  _inherits(ejDigitalGauge, _WidgetBase15);

  function ejDigitalGauge(element) {
    _classCallCheck(this, ejDigitalGauge);

    var _this17 = _possibleConstructorReturn(this, _WidgetBase15.call(this));

    _this17.element = element;
    return _this17;
  }

  return ejDigitalGauge;
}(WidgetBase)) || _class27) || _class27) || _class27) || _class27);
var ejDropDownList = exports.ejDropDownList = (_dec68 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'drop-down-list'), _dec69 = generateBindables('ejDropDownList', ['allowVirtualScrolling', 'cascadeTo', 'caseSensitiveSearch', 'cssClass', 'dataSource', 'delimiterChar', 'enableAnimation', 'enabled', 'enableIncrementalSearch', 'enableFilterSearch', 'enablePersistence', 'enablePopupResize', 'enableRTL', 'enableSorting', 'fields', 'filterType', 'headerTemplate', 'height', 'htmlAttributes', 'itemsCount', 'locale', 'maxPopupHeight', 'minPopupHeight', 'maxPopupWidth', 'minPopupWidth', 'multiSelectMode', 'popupHeight', 'popupWidth', 'query', 'readOnly', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showPopupOnLoad', 'showRoundedCorner', 'sortOrder', 'targetID', 'template', 'text', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width', 'virtualScrollMode'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' }), _dec70 = (0, _aureliaDependencyInjection.inject)(Element), _dec68(_class28 = _dec69(_class28 = _dec70(_class28 = function (_WidgetBase16) {
  _inherits(ejDropDownList, _WidgetBase16);

  function ejDropDownList(element) {
    _classCallCheck(this, ejDropDownList);

    var _this18 = _possibleConstructorReturn(this, _WidgetBase16.call(this));

    _this18.element = element;
    return _this18;
  }

  return ejDropDownList;
}(WidgetBase)) || _class28) || _class28) || _class28);
var ejFileExplorer = exports.ejFileExplorer = (_dec71 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'file-explorer'), _dec72 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec73 = generateBindables('ejFileExplorer', ['ajaxAction', 'ajaxDataType', 'ajaxSettings', 'allowMultiSelection', 'cssClass', 'enableResize', 'enableRTL', 'fileTypes', 'filterSettings', 'gridSettings', 'height', 'isResponsive', 'layout', 'locale', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'path', 'selectedFolder', 'selectedItems', 'showCheckbox', 'showContextMenu', 'showFooter', 'showRoundedCorner', 'showThumbnail', 'showToolbar', 'showNavigationPane', 'tools', 'toolsList', 'uploadSettings', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec74 = (0, _aureliaDependencyInjection.inject)(Element), _dec71(_class29 = _dec72(_class29 = _dec73(_class29 = _dec74(_class29 = function (_WidgetBase17) {
  _inherits(ejFileExplorer, _WidgetBase17);

  function ejFileExplorer(element) {
    _classCallCheck(this, ejFileExplorer);

    var _this19 = _possibleConstructorReturn(this, _WidgetBase17.call(this));

    _this19.element = element;
    return _this19;
  }

  return ejFileExplorer;
}(WidgetBase)) || _class29) || _class29) || _class29) || _class29);
var ejGantt = exports.ejGantt = (_dec75 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'gantt'), _dec76 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec77 = generateBindables('ejGantt', ['addDialogFields', 'allowColumnResize', 'allowGanttChartEditing', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowDragAndDrop', 'enablePredecessorValidation', 'baselineColor', 'baselineEndDateMapping', 'baselineStartDateMapping', 'childMapping', 'columnDialogFields', 'connectorLineBackground', 'connectorlineWidth', 'cssClass', 'dragTooltip', 'dataSource', 'dateFormat', 'durationMapping', 'durationUnit', 'editDialogFields', 'splitterSettings', 'editSettings', 'enableAltRow', 'enableWBS', 'enableWBSPredecessor', 'enableCollapseAll', 'enableContextMenu', 'enableProgressBarResizing', 'enableResize', 'enableTaskbarDragTooltip', 'enableTaskbarTooltip', 'enableVirtualization', 'endDateMapping', 'highlightWeekends', 'holidays', 'includeWeekend', 'locale', 'milestoneMapping', 'showColumnOptions', 'parentTaskbarTemplate', 'selectionType', 'parentProgressbarBackground', 'parentTaskbarBackground', 'parentTaskIdMapping', 'predecessorMapping', 'progressbarBackground', 'progressbarHeight', 'progressbarTooltipTemplate', 'progressbarTooltipTemplateId', 'progressMapping', 'query', 'renderBaseline', 'resourceIdMapping', 'resourceInfoMapping', 'resourceNameMapping', 'resources', 'roundOffDayworkingTime', 'rowHeight', 'scheduleEndDate', 'scheduleHeaderSettings', 'scheduleStartDate', 'selectedRowIndex', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'showProgressStatus', 'showResourceNames', 'showTaskNames', 'sizeSettings', 'selectedCellIndexes', 'sortSettings', 'splitterPosition', 'startDateMapping', 'stripLines', 'taskbarBackground', 'taskbarEditingTooltipTemplate', 'taskbarEditingTooltipTemplateId', 'taskbarTooltipTemplate', 'taskbarTemplate', 'milestoneTemplate', 'taskbarTooltipTemplateId', 'taskIdMapping', 'taskNameMapping', 'toolbarSettings', 'treeColumnIndex', 'selectionMode', 'weekendBackground', 'workingTimeScale'], ['dataSource', 'selectedRowIndex', 'selectedCellIndexes']), _dec78 = (0, _aureliaDependencyInjection.inject)(Element), _dec75(_class30 = _dec76(_class30 = _dec77(_class30 = _dec78(_class30 = function (_WidgetBase18) {
  _inherits(ejGantt, _WidgetBase18);

  function ejGantt(element) {
    _classCallCheck(this, ejGantt);

    var _this20 = _possibleConstructorReturn(this, _WidgetBase18.call(this));

    _this20.element = element;
    return _this20;
  }

  return ejGantt;
}(WidgetBase)) || _class30) || _class30) || _class30) || _class30);
var Column = exports.Column = (_dec79 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec80 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'column'), _dec81 = generateBindables('columns', ['clipMode', 'allowEditing', 'allowFiltering', 'allowGrouping', 'allowSorting', 'allowResizing', 'commands', 'cssClass', 'customAttributes', 'dataSource', 'defaultValue', 'disableHtmlEncode', 'displayAsCheckBox', 'editParams', 'editTemplate', 'editType', 'field', 'foreignKeyField', 'foreignKeyValue', 'format', 'headerTemplateID', 'headerText', 'headerTextAlign', 'isFrozen', 'isIdentity', 'isPrimaryKey', 'showInColumnChooser', 'template', 'textAlign', 'tooltip', 'type', 'validationRules', 'visible', 'width']), _dec82 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec79(_class31 = _dec80(_class31 = _dec81(_class31 = (_class32 = function () {
  function Column() {
    _classCallCheck(this, Column);

    _initDefineProp(this, 'template', _descriptor4, this);
  }

  Column.prototype.setTemplates = function setTemplates() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  return Column;
}(), (_descriptor4 = _applyDecoratedDescriptor(_class32.prototype, 'template', [_dec82], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class32)) || _class31) || _class31) || _class31);
var ejGrid = exports.ejGrid = (_dec83 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'grid'), _dec84 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec85 = generateBindables('ejGrid', ['allowCellMerging', 'allowGrouping', 'allowKeyboardNavigation', 'allowFiltering', 'allowSorting', 'allowMultiSorting', 'allowPaging', 'allowReordering', 'allowResizeToFit', 'allowResizing', 'allowRowDragAndDrop', 'allowScrolling', 'allowSearching', 'allowSelection', 'allowTextWrap', 'allowMultipleExporting', 'commonWidth', 'gridLines', 'childGrid', 'columnLayout', 'columns', 'contextMenuSettings', 'cssClass', 'dataSource', 'detailsTemplate', 'editSettings', 'enableAltRow', 'enableAutoSaveOnSelectionChange', 'enableHeaderHover', 'enablePersistence', 'enableResponsiveRow', 'enableRowHover', 'enableRTL', 'enableTouch', 'filterSettings', 'groupSettings', 'isResponsive', 'keySettings', 'locale', 'minWidth', 'pageSettings', 'query', 'rowTemplate', 'rowDropSettings', 'searchSettings', 'selectedRecords', 'selectedRowIndex', 'selectionSettings', 'selectionType', 'scrollSettings', 'showColumnChooser', 'showStackedHeader', 'showSummary', 'sortSettings', 'stackedHeaderRows', 'summaryRows', 'textWrapSettings', 'toolbarSettings'], ['dataSource'], { 'enableRTL': 'enableRtl' }), _dec86 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec87 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'column'), _dec83(_class34 = _dec84(_class34 = _dec85(_class34 = _dec86(_class34 = (_class35 = function (_WidgetBase19) {
  _inherits(ejGrid, _WidgetBase19);

  function ejGrid(element, templateEngine) {
    _classCallCheck(this, ejGrid);

    var _this21 = _possibleConstructorReturn(this, _WidgetBase19.call(this));

    _initDefineProp(_this21, 'columns', _descriptor5, _this21);

    _this21.element = element;
    _this21.hasChildProperty = true;
    _this21.childPropertyName = 'columns';
    _this21.templateProcessor = new TemplateProcessor(_this21, templateEngine);
    _this21.templateProcessor.initTemplate();
    return _this21;
  }

  return ejGrid;
}(WidgetBase), (_descriptor5 = _applyDecoratedDescriptor(_class35.prototype, 'columns', [_dec87], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class35)) || _class34) || _class34) || _class34) || _class34);
var ejGroupButton = exports.ejGroupButton = (_dec88 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'group-button'), _dec89 = generateBindables('ejGroupButton', ['cssClass', 'dataSource', 'enableRTL', 'enabled', 'fields', 'groupButtonMode', 'height', 'htmlAttributes', 'orientation', 'query', 'selectedItemIndex', 'showRoundedCorner', 'size', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec90 = (0, _aureliaDependencyInjection.inject)(Element), _dec88(_class37 = _dec89(_class37 = _dec90(_class37 = function (_WidgetBase20) {
  _inherits(ejGroupButton, _WidgetBase20);

  function ejGroupButton(element) {
    _classCallCheck(this, ejGroupButton);

    var _this22 = _possibleConstructorReturn(this, _WidgetBase20.call(this));

    _this22.element = element;
    return _this22;
  }

  return ejGroupButton;
}(WidgetBase)) || _class37) || _class37) || _class37);
var ejKanban = exports.ejKanban = (_dec91 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban'), _dec92 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec93 = generateBindables('ejKanban', ['allowDragAndDrop', 'allowTitle', 'swimlaneSettings', 'allowToggleColumn', 'allowSearching', 'allowSelection', 'allowHover', 'allowKeyboardNavigation', 'allowScrolling', 'allowPrinting', 'contextMenuSettings', 'columns', 'cardSettings', 'customToolbarItems', 'cssClass', 'dataSource', 'enableTouch', 'enableRTL', 'enableTotalCount', 'editSettings', 'fields', 'keyField', 'isResponsive', 'minWidth', 'filterSettings', 'query', 'keySettings', 'scrollSettings', 'searchSettings', 'selectionType', 'stackedHeaderRows', 'tooltipSettings', 'locale'], ['dataSource'], { 'enableRTL': 'enableRtl' }), _dec94 = (0, _aureliaDependencyInjection.inject)(Element), _dec95 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'kanban-column'), _dec91(_class38 = _dec92(_class38 = _dec93(_class38 = _dec94(_class38 = (_class39 = function (_WidgetBase21) {
  _inherits(ejKanban, _WidgetBase21);

  function ejKanban(element) {
    _classCallCheck(this, ejKanban);

    var _this23 = _possibleConstructorReturn(this, _WidgetBase21.call(this));

    _initDefineProp(_this23, 'columns', _descriptor6, _this23);

    _this23.element = element;
    _this23.hasChildProperty = true;
    _this23.childPropertyName = 'columns';
    return _this23;
  }

  return ejKanban;
}(WidgetBase), (_descriptor6 = _applyDecoratedDescriptor(_class39.prototype, 'columns', [_dec95], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class39)) || _class38) || _class38) || _class38) || _class38);
var KanbanColumn = exports.KanbanColumn = (_dec96 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec97 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'kanban-column'), _dec98 = generateBindables('columns', ['headerText', 'key', 'isCollapsed', 'constraints', 'headerTemplate', 'width', 'visible', 'showAddButton']), _dec96(_class41 = _dec97(_class41 = _dec98(_class41 = function KanbanColumn() {
  _classCallCheck(this, KanbanColumn);
}) || _class41) || _class41) || _class41);
var ejLinearGauge = exports.ejLinearGauge = (_dec99 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'linear-gauge'), _dec100 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec101 = generateBindables('ejLinearGauge', ['animationSpeed', 'backgroundColor', 'borderColor', 'enableAnimation', 'enableMarkerPointerAnimation', 'isResponsive', 'frame', 'height', 'labelColor', 'maximum', 'minimum', 'orientation', 'outerCustomLabelPosition', 'pointerGradient1', 'pointerGradient2', 'readOnly', 'scales', 'theme', 'tickColor', 'tooltip', 'value', 'width'], ['value', 'minimum', 'maximum']), _dec102 = (0, _aureliaDependencyInjection.inject)(Element), _dec99(_class42 = _dec100(_class42 = _dec101(_class42 = _dec102(_class42 = function (_WidgetBase22) {
  _inherits(ejLinearGauge, _WidgetBase22);

  function ejLinearGauge(element) {
    _classCallCheck(this, ejLinearGauge);

    var _this24 = _possibleConstructorReturn(this, _WidgetBase22.call(this));

    _this24.element = element;
    return _this24;
  }

  return ejLinearGauge;
}(WidgetBase)) || _class42) || _class42) || _class42) || _class42);
var ejListBox = exports.ejListBox = (_dec103 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'list-box'), _dec104 = generateBindables('ejListBox', ['allowDrag', 'allowDrop', 'allowMultiSelection', 'allowVirtualScrolling', 'caseSensitiveSearch', 'cascadeTo', 'checkedIndices', 'cssClass', 'dataSource', 'enabled', 'enableIncrementalSearch', 'enablePersistence', 'enableRTL', 'fields', 'height', 'itemsCount', 'totalItemsCount', 'itemRequestCount', 'loadDataOnInit', 'query', 'selectedIndex', 'selectedIndices', 'showCheckbox', 'showRoundedCorner', 'template', 'value', 'virtualScrollMode', 'width', 'targetID'], ['value'], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' }), _dec105 = (0, _aureliaDependencyInjection.inject)(Element), _dec103(_class43 = _dec104(_class43 = _dec105(_class43 = function (_WidgetBase23) {
  _inherits(ejListBox, _WidgetBase23);

  function ejListBox(element) {
    _classCallCheck(this, ejListBox);

    var _this25 = _possibleConstructorReturn(this, _WidgetBase23.call(this));

    _this25.element = element;
    return _this25;
  }

  return ejListBox;
}(WidgetBase)) || _class43) || _class43) || _class43);
var ejListView = exports.ejListView = (_dec106 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'list-view'), _dec107 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec108 = generateBindables('ejListView', ['cssClass', 'dataSource', 'enableAjax', 'enableCache', 'enableCheckMark', 'enableFiltering', 'enableGroupList', 'enablePersistence', 'fieldSettings', 'headerBackButtonText', 'headerTitle', 'height', 'persistSelection', 'preventSelection', 'query', 'renderTemplate', 'selectedItemIndex', 'showHeader', 'templateId', 'width'], ['dataSource', 'selectedItemIndex']), _dec109 = (0, _aureliaDependencyInjection.inject)(Element), _dec106(_class44 = _dec107(_class44 = _dec108(_class44 = _dec109(_class44 = function (_WidgetBase24) {
  _inherits(ejListView, _WidgetBase24);

  function ejListView(element) {
    _classCallCheck(this, ejListView);

    var _this26 = _possibleConstructorReturn(this, _WidgetBase24.call(this));

    _this26.element = element;
    return _this26;
  }

  return ejListView;
}(WidgetBase)) || _class44) || _class44) || _class44) || _class44);
var Layer = exports.Layer = (_dec110 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec111 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'layer'), _dec112 = generateBindables('layers', ['bingMapType', 'bubbleSettings', 'dataSource', 'shapeDataPath', 'shapePropertyPath', 'enableMouseHover', 'enableSelection', 'key', 'labelSettings', 'layerType', 'legendSettings', 'mapItemsTemplate', 'markers', 'markerTemplate', 'selectedMapShapes', 'selectionMode', 'shapeData', 'shapeSettings', 'showMapItems', 'showTooltip', 'tooltipTemplate', 'urlTemplate']), _dec110(_class45 = _dec111(_class45 = _dec112(_class45 = function Layer() {
  _classCallCheck(this, Layer);
}) || _class45) || _class45) || _class45);
var ejMap = exports.ejMap = (_dec113 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'map'), _dec114 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec115 = generateBindables('ejMap', ['background', 'baseMapIndex', 'centerPosition', 'enableAnimation', 'enableLayerChangeAnimation', 'enablePan', 'enableResize', 'zoomSettings', 'navigationControl', 'layers'], ['baseMapIndex', 'enablePan', 'enableResize', 'enableAnimation', 'zoomSettings.level', 'zoomSettings.minValue', 'zoomSettings.maxValue', 'zoomSettings.factor', 'zoomSettings.enableZoom', 'zoomSettings.enableZoomOnSelection', 'navigationControl.enableNavigation', 'navigationControl.orientation', 'navigationControl.absolutePosition', 'navigationControl.dockPosition']), _dec116 = (0, _aureliaDependencyInjection.inject)(Element), _dec117 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'layer'), _dec113(_class46 = _dec114(_class46 = _dec115(_class46 = _dec116(_class46 = (_class47 = function (_WidgetBase25) {
  _inherits(ejMap, _WidgetBase25);

  function ejMap(element) {
    _classCallCheck(this, ejMap);

    var _this27 = _possibleConstructorReturn(this, _WidgetBase25.call(this));

    _initDefineProp(_this27, 'layers', _descriptor7, _this27);

    _this27.element = element;
    _this27.hasChildProperty = true;
    _this27.childPropertyName = 'layers';
    return _this27;
  }

  return ejMap;
}(WidgetBase), (_descriptor7 = _applyDecoratedDescriptor(_class47.prototype, 'layers', [_dec117], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class47)) || _class46) || _class46) || _class46) || _class46);
var ejMaskEdit = exports.ejMaskEdit = (_dec118 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'mask-edit'), _dec119 = generateBindables('ejMaskEdit', ['cssClass', 'customCharacter', 'enabled', 'enablePersistence', 'height', 'hidePromptOnLeave', 'htmlAttributes', 'inputMode', 'maskFormat', 'name', 'readOnly', 'showError', 'showPromptChar', 'showRoundedCorner', 'textAlign', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], ['value']), _dec120 = (0, _aureliaDependencyInjection.inject)(Element), _dec118(_class49 = _dec119(_class49 = _dec120(_class49 = function (_WidgetBase26) {
  _inherits(ejMaskEdit, _WidgetBase26);

  function ejMaskEdit(element) {
    _classCallCheck(this, ejMaskEdit);

    var _this28 = _possibleConstructorReturn(this, _WidgetBase26.call(this));

    _this28.isEditor = true;
    _this28.element = element;
    return _this28;
  }

  return ejMaskEdit;
}(WidgetBase)) || _class49) || _class49) || _class49);
var ejMenu = exports.ejMenu = (_dec121 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'menu'), _dec122 = generateBindables('ejMenu', ['animationType', 'contextMenuTarget', 'cssClass', 'enableAnimation', 'enableCenterAlign', 'enabled', 'enableRTL', 'enableSeparator', 'excludeTarget', 'fields', 'height', 'htmlAttributes', 'menuType', 'openOnClick', 'orientation', 'showRootLevelArrows', 'showSubLevelArrows', 'subMenuDirection', 'titleText', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec123 = (0, _aureliaDependencyInjection.inject)(Element), _dec121(_class50 = _dec122(_class50 = _dec123(_class50 = function (_WidgetBase27) {
  _inherits(ejMenu, _WidgetBase27);

  function ejMenu(element) {
    _classCallCheck(this, ejMenu);

    var _this29 = _possibleConstructorReturn(this, _WidgetBase27.call(this));

    _this29.element = element;
    return _this29;
  }

  return ejMenu;
}(WidgetBase)) || _class50) || _class50) || _class50);
var ejNavigationDrawer = exports.ejNavigationDrawer = (_dec124 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'navigation-drawer'), _dec125 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec126 = generateBindables('ejNavigationDrawer', ['contentId', 'cssClass', 'direction', 'enableListView', 'items', 'listViewSettings', 'position', 'targetId', 'type', 'width']), _dec127 = (0, _aureliaDependencyInjection.inject)(Element), _dec124(_class51 = _dec125(_class51 = _dec126(_class51 = _dec127(_class51 = function (_WidgetBase28) {
  _inherits(ejNavigationDrawer, _WidgetBase28);

  function ejNavigationDrawer(element) {
    _classCallCheck(this, ejNavigationDrawer);

    var _this30 = _possibleConstructorReturn(this, _WidgetBase28.call(this));

    _this30.element = element;
    return _this30;
  }

  return ejNavigationDrawer;
}(WidgetBase)) || _class51) || _class51) || _class51) || _class51);
var ejNumericTextbox = exports.ejNumericTextbox = (_dec128 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'numeric-textbox'), _dec129 = generateBindables('ejNumericTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec130 = (0, _aureliaDependencyInjection.inject)(Element), _dec128(_class52 = _dec129(_class52 = _dec130(_class52 = function (_WidgetBase29) {
  _inherits(ejNumericTextbox, _WidgetBase29);

  function ejNumericTextbox(element) {
    _classCallCheck(this, ejNumericTextbox);

    var _this31 = _possibleConstructorReturn(this, _WidgetBase29.call(this));

    _this31.isEditor = true;
    _this31.element = element;
    return _this31;
  }

  return ejNumericTextbox;
}(WidgetBase)) || _class52) || _class52) || _class52);
var ejOverview = exports.ejOverview = (_dec131 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'overview'), _dec132 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec133 = generateBindables('ejOverview', ['sourceID', 'height', 'width'], [], { 'sourceID': 'sourceId' }), _dec134 = (0, _aureliaDependencyInjection.inject)(Element), _dec131(_class53 = _dec132(_class53 = _dec133(_class53 = _dec134(_class53 = function (_WidgetBase30) {
  _inherits(ejOverview, _WidgetBase30);

  function ejOverview(element) {
    _classCallCheck(this, ejOverview);

    var _this32 = _possibleConstructorReturn(this, _WidgetBase30.call(this));

    _this32.element = element;
    return _this32;
  }

  return ejOverview;
}(WidgetBase)) || _class53) || _class53) || _class53) || _class53);
var ejPdfViewer = exports.ejPdfViewer = (_dec135 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pdf-viewer'), _dec136 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec137 = generateBindables('ejPdfViewer', ['locale', 'toolbarSettings', 'toolbarItems', 'serviceUrl', 'pageCount', 'currentPageNumber', 'zoomPercentage', 'pdfService']), _dec138 = (0, _aureliaDependencyInjection.inject)(Element), _dec135(_class54 = _dec136(_class54 = _dec137(_class54 = _dec138(_class54 = function (_WidgetBase31) {
  _inherits(ejPdfViewer, _WidgetBase31);

  function ejPdfViewer(element) {
    _classCallCheck(this, ejPdfViewer);

    var _this33 = _possibleConstructorReturn(this, _WidgetBase31.call(this));

    _this33.element = element;
    return _this33;
  }

  return ejPdfViewer;
}(WidgetBase)) || _class54) || _class54) || _class54) || _class54);
var ejPercentageTextbox = exports.ejPercentageTextbox = (_dec139 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'percentage-textbox'), _dec140 = generateBindables('ejPercentageTextbox', ['cssClass', 'decimalPlaces', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'groupSize', 'groupSeparator', 'height', 'htmlAttributes', 'incrementStep', 'locale', 'maxValue', 'minValue', 'name', 'negativePattern', 'positivePattern', 'readOnly', 'showRoundedCorner', 'showSpinButton', 'validateOnType', 'validationMessage', 'validationRules', 'value', 'watermarkText', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec141 = (0, _aureliaDependencyInjection.inject)(Element), _dec139(_class55 = _dec140(_class55 = _dec141(_class55 = function (_WidgetBase32) {
  _inherits(ejPercentageTextbox, _WidgetBase32);

  function ejPercentageTextbox(element) {
    _classCallCheck(this, ejPercentageTextbox);

    var _this34 = _possibleConstructorReturn(this, _WidgetBase32.call(this));

    _this34.isEditor = true;
    _this34.element = element;
    return _this34;
  }

  return ejPercentageTextbox;
}(WidgetBase)) || _class55) || _class55) || _class55);
var ejPivotChart = exports.ejPivotChart = (_dec142 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-chart'), _dec143 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec144 = generateBindables('ejPivotChart', ['analysisMode', 'cssClass', 'commonSeriesOptions', 'currentReport', 'dataSource', 'customObject', 'enable3D', 'enableRTL', 'isResponsive', 'legend', 'locale', 'operationalMode', 'primaryXAxis', 'primaryYAxis', 'rotation', 'serviceMethodSettings', 'size', 'url'], [], { 'enableRTL': 'enableRtl' }), _dec145 = (0, _aureliaDependencyInjection.inject)(Element), _dec142(_class56 = _dec143(_class56 = _dec144(_class56 = _dec145(_class56 = function (_WidgetBase33) {
  _inherits(ejPivotChart, _WidgetBase33);

  function ejPivotChart(element) {
    _classCallCheck(this, ejPivotChart);

    var _this35 = _possibleConstructorReturn(this, _WidgetBase33.call(this));

    _this35.element = element;
    return _this35;
  }

  return ejPivotChart;
}(WidgetBase)) || _class56) || _class56) || _class56) || _class56);
var ejPivotGauge = exports.ejPivotGauge = (_dec146 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-gauge'), _dec147 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec148 = generateBindables('ejPivotGauge', ['backgroundColor', 'columnsCount', 'cssClass', 'customObject', 'dataSource', 'enableTooltip', 'enableRTL', 'isResponsive', 'labelFormatSettings', 'locale', 'rowsCount', 'scales', 'serviceMethodSettings', 'showHeaderLabel', 'url'], [], { 'enableRTL': 'enableRtl' }), _dec149 = (0, _aureliaDependencyInjection.inject)(Element), _dec146(_class57 = _dec147(_class57 = _dec148(_class57 = _dec149(_class57 = function (_WidgetBase34) {
  _inherits(ejPivotGauge, _WidgetBase34);

  function ejPivotGauge(element) {
    _classCallCheck(this, ejPivotGauge);

    var _this36 = _possibleConstructorReturn(this, _WidgetBase34.call(this));

    _this36.element = element;
    return _this36;
  }

  return ejPivotGauge;
}(WidgetBase)) || _class57) || _class57) || _class57) || _class57);
var ejPivotGrid = exports.ejPivotGrid = (_dec150 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-grid'), _dec151 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec152 = generateBindables('ejPivotGrid', ['analysisMode', 'cssClass', 'currentReport', 'dataSource', 'drilledItems', 'customObject', 'enableCellContext', 'enableCellSelection', 'enableDrillThrough', 'enableCellDoubleClick', 'enableCellEditing', 'enableCollapseByDefault', 'enableColumnGrandTotal', 'enableConditionalFormatting', 'enableDeferUpdate', 'enableGroupingBar', 'enableGrandTotal', 'enableJSONRendering', 'enablePivotFieldList', 'enableRowGrandTotal', 'enableRTL', 'enableToolTip', 'enableToolTipAnimation', 'enableVirtualScrolling', 'hyperlinkSettings', 'isNamedSets', 'isResponsive', 'jsonRecords', 'layout', 'locale', 'operationalMode', 'serviceMethodSettings', 'url'], [], { 'enableRTL': 'enableRtl' }), _dec153 = (0, _aureliaDependencyInjection.inject)(Element), _dec150(_class58 = _dec151(_class58 = _dec152(_class58 = _dec153(_class58 = function (_WidgetBase35) {
  _inherits(ejPivotGrid, _WidgetBase35);

  function ejPivotGrid(element) {
    _classCallCheck(this, ejPivotGrid);

    var _this37 = _possibleConstructorReturn(this, _WidgetBase35.call(this));

    _this37.element = element;
    return _this37;
  }

  return ejPivotGrid;
}(WidgetBase)) || _class58) || _class58) || _class58) || _class58);
var ejPivotSchemaDesigner = exports.ejPivotSchemaDesigner = (_dec154 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'pivot-schema-designer'), _dec155 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec156 = generateBindables('ejPivotSchemaDesigner', ['cssClass', 'customObject', 'enableWrapper', 'enableRTL', 'showKPI', 'showNamedSets', 'enableDragDrop', 'filters', 'height', 'locale', 'pivotCalculations', 'pivotColumns', 'pivotControl', 'pivotRows', 'pivotTableFields', 'serviceMethod', 'url', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec157 = (0, _aureliaDependencyInjection.inject)(Element), _dec154(_class59 = _dec155(_class59 = _dec156(_class59 = _dec157(_class59 = function (_WidgetBase36) {
  _inherits(ejPivotSchemaDesigner, _WidgetBase36);

  function ejPivotSchemaDesigner(element) {
    _classCallCheck(this, ejPivotSchemaDesigner);

    var _this38 = _possibleConstructorReturn(this, _WidgetBase36.call(this));

    _this38.element = element;
    return _this38;
  }

  return ejPivotSchemaDesigner;
}(WidgetBase)) || _class59) || _class59) || _class59) || _class59);
var ejProgressBar = exports.ejProgressBar = (_dec158 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'progress-bar'), _dec159 = generateBindables('ejProgressBar', ['cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'maxValue', 'minValue', 'percentage', 'showRoundedCorner', 'text', 'value', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec160 = (0, _aureliaDependencyInjection.inject)(Element), _dec158(_class60 = _dec159(_class60 = _dec160(_class60 = function (_WidgetBase37) {
  _inherits(ejProgressBar, _WidgetBase37);

  function ejProgressBar(element) {
    _classCallCheck(this, ejProgressBar);

    var _this39 = _possibleConstructorReturn(this, _WidgetBase37.call(this));

    _this39.element = element;
    return _this39;
  }

  return ejProgressBar;
}(WidgetBase)) || _class60) || _class60) || _class60);
var Item = exports.Item = (_dec161 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec162 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'item'), _dec163 = generateBindables('items', ['imageUrl', 'text', 'enabled', 'click', 'badge', 'type', 'sliderSettings']), _dec164 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec161(_class61 = _dec162(_class61 = _dec163(_class61 = (_class62 = function () {
  function Item() {
    _classCallCheck(this, Item);

    _initDefineProp(this, 'template', _descriptor8, this);
  }

  Item.prototype.setTemplates = function setTemplates() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  return Item;
}(), (_descriptor8 = _applyDecoratedDescriptor(_class62.prototype, 'template', [_dec164], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class62)) || _class61) || _class61) || _class61);
var ejRadialMenu = exports.ejRadialMenu = (_dec165 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-menu'), _dec166 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec167 = generateBindables('ejRadialMenu', ['autoOpen', 'backImageClass', 'cssClass', 'enableAnimation', 'imageClass', 'items', 'radius', 'targetElementId', 'position']), _dec168 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec169 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'item'), _dec165(_class64 = _dec166(_class64 = _dec167(_class64 = _dec168(_class64 = (_class65 = function (_WidgetBase38) {
  _inherits(ejRadialMenu, _WidgetBase38);

  function ejRadialMenu(element, templateEngine) {
    _classCallCheck(this, ejRadialMenu);

    var _this40 = _possibleConstructorReturn(this, _WidgetBase38.call(this));

    _initDefineProp(_this40, 'items', _descriptor9, _this40);

    _this40.element = element;
    _this40.hasChildProperty = true;
    _this40.childPropertyName = 'items';
    _this40.templateProcessor = new TemplateProcessor(_this40, templateEngine);
    _this40.templateProcessor.initTemplate();
    return _this40;
  }

  return ejRadialMenu;
}(WidgetBase), (_descriptor9 = _applyDecoratedDescriptor(_class65.prototype, 'items', [_dec169], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class65)) || _class64) || _class64) || _class64) || _class64);
var ejRadialSlider = exports.ejRadialSlider = (_dec170 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'radial-slider'), _dec171 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec172 = generateBindables('ejRadialSlider', ['autoOpen', 'cssClass', 'enableAnimation', 'enableRoundOff', 'endAngle', 'inline', 'innerCircleImageClass', 'innerCircleImageUrl', 'labelSpace', 'radius', 'showInnerCircle', 'startAngle', 'strokeWidth', 'value'], ['value']), _dec173 = (0, _aureliaDependencyInjection.inject)(Element), _dec170(_class67 = _dec171(_class67 = _dec172(_class67 = _dec173(_class67 = function (_WidgetBase39) {
  _inherits(ejRadialSlider, _WidgetBase39);

  function ejRadialSlider(element) {
    _classCallCheck(this, ejRadialSlider);

    var _this41 = _possibleConstructorReturn(this, _WidgetBase39.call(this));

    _this41.element = element;
    return _this41;
  }

  return ejRadialSlider;
}(WidgetBase)) || _class67) || _class67) || _class67) || _class67);
var ejRadioButton = exports.ejRadioButton = (_dec174 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'radio-button'), _dec175 = generateBindables('ejRadioButton', ['checked', 'cssClass', 'enabled', 'enablePersistence', 'enableRTL', 'htmlAttributes', 'id', 'idPrefix', 'name', 'size', 'text', 'validationMessage', 'validationRules', 'value'], [], { 'enableRTL': 'enableRtl' }), _dec176 = (0, _aureliaDependencyInjection.inject)(Element), _dec174(_class68 = _dec175(_class68 = _dec176(_class68 = function (_WidgetBase40) {
  _inherits(ejRadioButton, _WidgetBase40);

  function ejRadioButton(element) {
    _classCallCheck(this, ejRadioButton);

    var _this42 = _possibleConstructorReturn(this, _WidgetBase40.call(this));

    _this42.element = element;
    return _this42;
  }

  return ejRadioButton;
}(WidgetBase)) || _class68) || _class68) || _class68);
var ejRangeNavigator = exports.ejRangeNavigator = (_dec177 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-navigator'), _dec178 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec179 = generateBindables('ejRangeNavigator', ['allowSnapping', 'border', 'dataSource', 'enableDeferredUpdate', 'enableScrollbar', 'enableRTL', 'isResponsive', 'labelSettings', 'locale', 'navigatorStyleSettings', 'padding', 'rangePadding', 'rangeSettings', 'selectedData', 'selectedRangeSettings', 'scrollRangeSettings', 'sizeSettings', 'theme', 'tooltipSettings', 'valueAxisSettings', 'valueType', 'xName', 'yName'], [], { 'enableRTL': 'enableRtl' }), _dec180 = (0, _aureliaDependencyInjection.inject)(Element), _dec181 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'range-series'), _dec177(_class69 = _dec178(_class69 = _dec179(_class69 = _dec180(_class69 = (_class70 = function (_WidgetBase41) {
  _inherits(ejRangeNavigator, _WidgetBase41);

  function ejRangeNavigator(element) {
    _classCallCheck(this, ejRangeNavigator);

    var _this43 = _possibleConstructorReturn(this, _WidgetBase41.call(this));

    _initDefineProp(_this43, 'series', _descriptor10, _this43);

    _this43.element = element;
    _this43.hasChildProperty = true;
    _this43.childPropertyName = 'series';
    return _this43;
  }

  return ejRangeNavigator;
}(WidgetBase), (_descriptor10 = _applyDecoratedDescriptor(_class70.prototype, 'series', [_dec181], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class70)) || _class69) || _class69) || _class69) || _class69);
var RangeSeries = exports.RangeSeries = (_dec182 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec183 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'range-series'), _dec184 = generateBindables('series', []), _dec182(_class72 = _dec183(_class72 = _dec184(_class72 = function RangeSeries() {
  _classCallCheck(this, RangeSeries);
}) || _class72) || _class72) || _class72);
var ejRating = exports.ejRating = (_dec185 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rating'), _dec186 = generateBindables('ejRating', ['allowReset', 'cssClass', 'enabled', 'enablePersistence', 'height', 'incrementStep', 'maxValue', 'minValue', 'orientation', 'precision', 'readOnly', 'shapeHeight', 'shapeWidth', 'showTooltip', 'value', 'width'], ['value']), _dec187 = (0, _aureliaDependencyInjection.inject)(Element), _dec185(_class73 = _dec186(_class73 = _dec187(_class73 = function (_WidgetBase42) {
  _inherits(ejRating, _WidgetBase42);

  function ejRating(element) {
    _classCallCheck(this, ejRating);

    var _this44 = _possibleConstructorReturn(this, _WidgetBase42.call(this));

    _this44.element = element;
    return _this44;
  }

  return ejRating;
}(WidgetBase)) || _class73) || _class73) || _class73);
var ejReportViewer = exports.ejReportViewer = (_dec188 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'report-viewer'), _dec189 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec190 = generateBindables('ejReportViewer', ['dataSources', 'enablePageCache', 'exportSettings', 'isResponsive', 'locale', 'pageSettings', 'parameters', 'printMode', 'printOptions', 'processingMode', 'renderMode', 'reportPath', 'reportServerUrl', 'reportServiceUrl', 'toolbarSettings', 'zoomFactor']), _dec191 = (0, _aureliaDependencyInjection.inject)(Element), _dec188(_class74 = _dec189(_class74 = _dec190(_class74 = _dec191(_class74 = function (_WidgetBase43) {
  _inherits(ejReportViewer, _WidgetBase43);

  function ejReportViewer(element) {
    _classCallCheck(this, ejReportViewer);

    var _this45 = _possibleConstructorReturn(this, _WidgetBase43.call(this));

    _this45.element = element;
    return _this45;
  }

  return ejReportViewer;
}(WidgetBase)) || _class74) || _class74) || _class74) || _class74);
var ejRibbon = exports.ejRibbon = (_dec192 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'ribbon'), _dec193 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec194 = generateBindables('ejRibbon', ['allowResizing', 'buttonDefaults', 'showQAT', 'collapsePinSettings', 'enableRTL', 'expandPinSettings', 'applicationTab', 'contextualTabs', 'disabledItemIndex', 'enabledItemIndex', 'selectedItemIndex', 'tabs', 'locale', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec195 = (0, _aureliaDependencyInjection.inject)(Element), _dec192(_class75 = _dec193(_class75 = _dec194(_class75 = _dec195(_class75 = function (_WidgetBase44) {
  _inherits(ejRibbon, _WidgetBase44);

  function ejRibbon(element) {
    _classCallCheck(this, ejRibbon);

    var _this46 = _possibleConstructorReturn(this, _WidgetBase44.call(this));

    _this46.element = element;
    return _this46;
  }

  return ejRibbon;
}(WidgetBase)) || _class75) || _class75) || _class75) || _class75);
var ejRotator = exports.ejRotator = (_dec196 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rotator'), _dec197 = generateBindables('ejRotator', ['allowKeyboardNavigation', 'animationSpeed', 'animationType', 'circularMode', 'cssClass', 'dataSource', 'delay', 'displayItemsCount', 'enableAutoPlay', 'enabled', 'enableRTL', 'fields', 'frameSpace', 'isResponsive', 'navigateSteps', 'orientation', 'pagerPosition', 'query', 'showCaption', 'showNavigateButton', 'showPager', 'showPlayButton', 'showThumbnail', 'slideHeight', 'slideWidth', 'startIndex', 'stopOnHover', 'template', 'thumbnailSourceID'], [], { 'enableRTL': 'enableRtl', 'thumbnailSourceID': 'thumbnailSourceId' }), _dec198 = (0, _aureliaDependencyInjection.inject)(Element), _dec196(_class76 = _dec197(_class76 = _dec198(_class76 = function (_WidgetBase45) {
  _inherits(ejRotator, _WidgetBase45);

  function ejRotator(element) {
    _classCallCheck(this, ejRotator);

    var _this47 = _possibleConstructorReturn(this, _WidgetBase45.call(this));

    _this47.element = element;
    return _this47;
  }

  return ejRotator;
}(WidgetBase)) || _class76) || _class76) || _class76);
var ejRte = exports.ejRte = (_dec199 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'rte'), _dec200 = generateBindables('ejRTE', ['allowEditing', 'allowKeyboardNavigation', 'autoFocus', 'autoHeight', 'colorCode', 'colorPaletteColumns', 'colorPaletteRows', 'cssClass', 'enabled', 'enableHtmlEncode', 'enablePersistence', 'enableResize', 'enableRTL', 'enableXHTML', 'enableTabKeyNavigation', 'externalCSS', 'fileBrowser', 'fontName', 'fontSize', 'format', 'height', 'htmlAttributes', 'iframeAttributes', 'imageBrowser', 'isResponsive', 'locale', 'maxHeight', 'maxLength', 'maxWidth', 'minHeight', 'minWidth', 'name', 'showClearAll', 'showClearFormat', 'showCustomTable', 'showContextMenu', 'showDimensions', 'showFontOption', 'showFooter', 'showHtmlSource', 'showHtmlTagInfo', 'showToolbar', 'showCharCount', 'showWordCount', 'tableColumns', 'tableRows', 'tools', 'toolsList', 'undoStackLimit', 'value', 'validationRules', 'validationMessage', 'width', 'zoomStep'], ['value'], { 'enableRTL': 'enableRtl' }), _dec201 = (0, _aureliaDependencyInjection.inject)(Element), _dec199(_class77 = _dec200(_class77 = _dec201(_class77 = function (_WidgetBase46) {
  _inherits(ejRte, _WidgetBase46);

  function ejRte(element) {
    _classCallCheck(this, ejRte);

    var _this48 = _possibleConstructorReturn(this, _WidgetBase46.call(this));

    _this48.element = element;
    return _this48;
  }

  return ejRte;
}(WidgetBase)) || _class77) || _class77) || _class77);
var ejSchedule = exports.ejSchedule = (_dec202 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule'), _dec203 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec204 = generateBindables('ejSchedule', ['allowDragAndDrop', 'allowKeyboardNavigation', 'appointmentSettings', 'appointmentTemplateId', 'cssClass', 'categorizeSettings', 'cellHeight', 'cellWidth', 'contextMenuSettings', 'currentDate', 'currentView', 'dateFormat', 'showAppointmentNavigator', 'enableAppointmentResize', 'enableLoadOnDemand', 'enablePersistence', 'enableRTL', 'endHour', 'group', 'height', 'workHours', 'isDST', 'isResponsive', 'locale', 'maxDate', 'minDate', 'orientation', 'prioritySettings', 'readOnly', 'reminderSettings', 'renderDates', 'resourceHeaderTemplateId', 'resources', 'showAllDayRow', 'showCurrentTimeIndicator', 'showHeaderBar', 'showLocationField', 'showQuickWindow', 'startHour', 'timeMode', 'timeZone', 'timeZoneCollection', 'views', 'width', 'enableRecurrenceValidation', 'agendaViewSettings', 'firstDayOfWeek', 'workWeek', 'tooltipSettings', 'timeScale', 'showDeleteConfirmationDialog', 'allDayCellsTemplateId', 'workCellsTemplateId', 'dateHeaderTemplateId', 'showOverflowButton', 'appointmentDragArea', 'showNextPrevMonth'], ['currentView', 'currentDate'], { 'enableRTL': 'enableRtl' }), _dec205 = (0, _aureliaDependencyInjection.inject)(Element), _dec206 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'schedule-resource'), _dec202(_class78 = _dec203(_class78 = _dec204(_class78 = _dec205(_class78 = (_class79 = function (_WidgetBase47) {
  _inherits(ejSchedule, _WidgetBase47);

  function ejSchedule(element) {
    _classCallCheck(this, ejSchedule);

    var _this49 = _possibleConstructorReturn(this, _WidgetBase47.call(this));

    _initDefineProp(_this49, 'resources', _descriptor11, _this49);

    _this49.element = element;
    _this49.hasChildProperty = true;
    _this49.childPropertyName = 'resources';
    return _this49;
  }

  return ejSchedule;
}(WidgetBase), (_descriptor11 = _applyDecoratedDescriptor(_class79.prototype, 'resources', [_dec206], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class79)) || _class78) || _class78) || _class78) || _class78);
var ScheduleResource = exports.ScheduleResource = (_dec207 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec208 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'schedule-resource'), _dec209 = generateBindables('resources', ['field', 'title', 'name', 'allowMultiple', 'resourceSettings']), _dec207(_class81 = _dec208(_class81 = _dec209(_class81 = function ScheduleResource() {
  _classCallCheck(this, ScheduleResource);
}) || _class81) || _class81) || _class81);
var ejScroller = exports.ejScroller = (_dec210 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'scroller'), _dec211 = generateBindables('ejScroller', ['autoHide', 'buttonSize', 'enabled', 'enablePersistence', 'enableRTL', 'enableTouchScroll', 'height', 'scrollerSize', 'scrollLeft', 'scrollOneStepBy', 'scrollTop', 'targetPane', 'width'], ['scrollLeft', 'scrollTop'], { 'enableRTL': 'enableRtl' }), _dec212 = (0, _aureliaDependencyInjection.inject)(Element), _dec210(_class82 = _dec211(_class82 = _dec212(_class82 = function (_WidgetBase48) {
  _inherits(ejScroller, _WidgetBase48);

  function ejScroller(element) {
    _classCallCheck(this, ejScroller);

    var _this50 = _possibleConstructorReturn(this, _WidgetBase48.call(this));

    _this50.element = element;
    return _this50;
  }

  return ejScroller;
}(WidgetBase)) || _class82) || _class82) || _class82);
var ejSlider = exports.ejSlider = (_dec213 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'slider'), _dec214 = generateBindables('ejSlider', ['allowMouseWheel', 'animationSpeed', 'cssClass', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'incrementStep', 'largeStep', 'maxValue', 'minValue', 'orientation', 'readOnly', 'showRoundedCorner', 'showScale', 'showSmallTicks', 'showTooltip', 'sliderType', 'smallStep', 'value', 'values', 'width'], ['value'], { 'enableRTL': 'enableRtl' }), _dec215 = (0, _aureliaDependencyInjection.inject)(Element), _dec213(_class83 = _dec214(_class83 = _dec215(_class83 = function (_WidgetBase49) {
  _inherits(ejSlider, _WidgetBase49);

  function ejSlider(element) {
    _classCallCheck(this, ejSlider);

    var _this51 = _possibleConstructorReturn(this, _WidgetBase49.call(this));

    _this51.element = element;
    return _this51;
  }

  return ejSlider;
}(WidgetBase)) || _class83) || _class83) || _class83);
var ejSparkline = exports.ejSparkline = (_dec216 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sparkline'), _dec217 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec218 = generateBindables('ejSparkline', ['background', 'fill', 'stroke', 'border', 'width', 'opacity', 'highPointColor', 'lowPointColor', 'startPointColor', 'endPointColor', 'negativePointColor', 'rangeBandSettings', 'palette', 'isResponsive', 'enableCanvasRendering', 'dataSource', 'xName', 'yName', 'padding', 'type', 'theme', 'tooltip', 'markerSettings', 'size', 'axisLineSettings']), _dec219 = (0, _aureliaDependencyInjection.inject)(Element), _dec216(_class84 = _dec217(_class84 = _dec218(_class84 = _dec219(_class84 = function (_WidgetBase50) {
  _inherits(ejSparkline, _WidgetBase50);

  function ejSparkline(element) {
    _classCallCheck(this, ejSparkline);

    var _this52 = _possibleConstructorReturn(this, _WidgetBase50.call(this));

    _this52.element = element;
    return _this52;
  }

  return ejSparkline;
}(WidgetBase)) || _class84) || _class84) || _class84) || _class84);
var ejSplitButton = exports.ejSplitButton = (_dec220 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'split-button'), _dec221 = generateBindables('ejSplitButton', ['arrowPosition', 'buttonMode', 'contentType', 'cssClass', 'enabled', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'prefixIcon', 'showRoundedCorner', 'size', 'suffixIcon', 'targetID', 'text', 'width'], [], { 'enableRTL': 'enableRtl', 'targetID': 'targetId' }), _dec222 = (0, _aureliaDependencyInjection.inject)(Element), _dec220(_class85 = _dec221(_class85 = _dec222(_class85 = function (_WidgetBase51) {
  _inherits(ejSplitButton, _WidgetBase51);

  function ejSplitButton(element) {
    _classCallCheck(this, ejSplitButton);

    var _this53 = _possibleConstructorReturn(this, _WidgetBase51.call(this));

    _this53.element = element;
    return _this53;
  }

  return ejSplitButton;
}(WidgetBase)) || _class85) || _class85) || _class85);
var ejSplitter = exports.ejSplitter = (_dec223 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'splitter'), _dec224 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec225 = generateBindables('ejSplitter', ['allowKeyboardNavigation', 'animationSpeed', 'cssClass', 'enableAnimation', 'enableRTL', 'height', 'htmlAttributes', 'isResponsive', 'orientation', 'properties', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec226 = (0, _aureliaDependencyInjection.inject)(Element), _dec223(_class86 = _dec224(_class86 = _dec225(_class86 = _dec226(_class86 = function (_WidgetBase52) {
  _inherits(ejSplitter, _WidgetBase52);

  function ejSplitter(element) {
    _classCallCheck(this, ejSplitter);

    var _this54 = _possibleConstructorReturn(this, _WidgetBase52.call(this));

    _this54.element = element;
    return _this54;
  }

  return ejSplitter;
}(WidgetBase)) || _class86) || _class86) || _class86) || _class86);
var Sheet = exports.Sheet = (_dec227 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec228 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'sheet'), _dec229 = generateBindables('sheets', ['colCount', 'columnWidth', 'dataSource', 'fieldAsColumnHeader', 'headerStyles', 'primaryKey', 'query', 'rangeSettings', 'rowCount', 'showGridlines', 'showHeader', 'showHeadings', 'startCell']), _dec227(_class87 = _dec228(_class87 = _dec229(_class87 = function Sheet() {
  _classCallCheck(this, Sheet);
}) || _class87) || _class87) || _class87);
var ejSpreadsheet = exports.ejSpreadsheet = (_dec230 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'spreadsheet'), _dec231 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec232 = generateBindables('ejSpreadsheet', ['activeSheetIndex', 'allowAutoCellType', 'allowAutoFill', 'allowAutoSum', 'allowCellFormatting', 'allowCellType', 'allowCharts', 'allowClipboard', 'allowComments', 'allowConditionalFormats', 'allowDataValidation', 'allowDelete', 'allowDragAndDrop', 'allowEditing', 'allowFiltering', 'allowFormatAsTable', 'allowFormatPainter', 'allowFormulaBar', 'allowFreezing', 'allowHyperlink', 'allowImport', 'allowInsert', 'allowKeyboardNavigation', 'allowLockCell', 'allowMerging', 'allowResizing', 'allowSearching', 'allowSelection', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'apWidth', 'autoFillSettings', 'chartSettings', 'columnCount', 'columnWidth', 'cssClass', 'customFormulas', 'enableContextMenu', 'enablePivotTable', 'exportSettings', 'formatSettings', 'importOnLoad', 'importSettings', 'locale', 'pictureSettings', 'printSettings', 'rowCount', 'rowHeight', 'scrollSettings', 'selectionSettings', 'sheetCount', 'sheets', 'showRibbon', 'undoRedoStep', 'userName']), _dec233 = (0, _aureliaDependencyInjection.inject)(Element), _dec234 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'sheet'), _dec230(_class88 = _dec231(_class88 = _dec232(_class88 = _dec233(_class88 = (_class89 = function (_WidgetBase53) {
  _inherits(ejSpreadsheet, _WidgetBase53);

  function ejSpreadsheet(element) {
    _classCallCheck(this, ejSpreadsheet);

    var _this55 = _possibleConstructorReturn(this, _WidgetBase53.call(this));

    _initDefineProp(_this55, 'sheets', _descriptor12, _this55);

    _this55.element = element;
    _this55.hasChildProperty = true;
    _this55.childPropertyName = 'sheets';
    return _this55;
  }

  return ejSpreadsheet;
}(WidgetBase), (_descriptor12 = _applyDecoratedDescriptor(_class89.prototype, 'sheets', [_dec234], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class89)) || _class88) || _class88) || _class88) || _class88);
var ejSymbolPalette = exports.ejSymbolPalette = (_dec235 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'symbol-palette'), _dec236 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec237 = generateBindables('ejSymbolPalette', ['allowDrag', 'cssClass', 'defaultSettings', 'diagramId', 'headerHeight', 'height', 'paletteItemHeight', 'paletteItemWidth', 'palettes', 'previewHeight', 'previewOffset', 'previewWidth', 'showPaletteItemText', 'width']), _dec238 = (0, _aureliaDependencyInjection.inject)(Element), _dec235(_class91 = _dec236(_class91 = _dec237(_class91 = _dec238(_class91 = function (_WidgetBase54) {
  _inherits(ejSymbolPalette, _WidgetBase54);

  function ejSymbolPalette(element) {
    _classCallCheck(this, ejSymbolPalette);

    var _this56 = _possibleConstructorReturn(this, _WidgetBase54.call(this));

    _this56.element = element;
    return _this56;
  }

  return ejSymbolPalette;
}(WidgetBase)) || _class91) || _class91) || _class91) || _class91);
var ejTab = exports.ejTab = (_dec239 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tab'), _dec240 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec241 = generateBindables('ejTab', ['ajaxSettings', 'allowKeyboardNavigation', 'collapsible', 'cssClass', 'disabledItemIndex', 'enableAnimation', 'enabled', 'enabledItemIndex', 'enablePersistence', 'enableRTL', 'enableTabScroll', 'events', 'headerPosition', 'headerSize', 'height', 'heightAdjustMode', 'hiddenItemIndex', 'htmlAttributes', 'idPrefix', 'selectedItemIndex', 'showCloseButton', 'showReloadIcon', 'showRoundedCorner', 'width'], ['selectedItemIndex'], { 'enableRTL': 'enableRtl' }), _dec242 = (0, _aureliaDependencyInjection.inject)(Element), _dec239(_class92 = _dec240(_class92 = _dec241(_class92 = _dec242(_class92 = function (_WidgetBase55) {
  _inherits(ejTab, _WidgetBase55);

  function ejTab(element) {
    _classCallCheck(this, ejTab);

    var _this57 = _possibleConstructorReturn(this, _WidgetBase55.call(this));

    _this57.element = element;
    return _this57;
  }

  return ejTab;
}(WidgetBase)) || _class92) || _class92) || _class92) || _class92);
var ejTagCloud = exports.ejTagCloud = (_dec243 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tag-cloud'), _dec244 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec245 = generateBindables('ejTagCloud', ['cssClass', 'dataSource', 'enableRTL', 'fields', 'format', 'maxFontSize', 'minFontSize', 'query', 'showTitle', 'titleImage', 'titleText'], [], { 'enableRTL': 'enableRtl' }), _dec246 = (0, _aureliaDependencyInjection.inject)(Element), _dec243(_class93 = _dec244(_class93 = _dec245(_class93 = _dec246(_class93 = function (_WidgetBase56) {
  _inherits(ejTagCloud, _WidgetBase56);

  function ejTagCloud(element) {
    _classCallCheck(this, ejTagCloud);

    var _this58 = _possibleConstructorReturn(this, _WidgetBase56.call(this));

    _this58.element = element;
    return _this58;
  }

  return ejTagCloud;
}(WidgetBase)) || _class93) || _class93) || _class93) || _class93);
var ejTile = exports.ejTile = (_dec247 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tile'), _dec248 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec249 = generateBindables('ejTile', ['badge', 'caption', 'cssClass', 'enablePersistence', 'height', 'imageClass', 'imagePosition', 'imageTemplateId', 'imageUrl', 'liveTile', 'tileSize', 'width', 'showRoundedCorner', 'allowSelection', 'backgroundColor']), _dec250 = (0, _aureliaDependencyInjection.inject)(Element), _dec247(_class94 = _dec248(_class94 = _dec249(_class94 = _dec250(_class94 = function (_WidgetBase57) {
  _inherits(ejTile, _WidgetBase57);

  function ejTile(element) {
    _classCallCheck(this, ejTile);

    var _this59 = _possibleConstructorReturn(this, _WidgetBase57.call(this));

    _this59.element = element;
    return _this59;
  }

  return ejTile;
}(WidgetBase)) || _class94) || _class94) || _class94) || _class94);
var ejTimePicker = exports.ejTimePicker = (_dec251 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'time-picker'), _dec252 = generateBindables('ejTimePicker', ['cssClass', 'disableTimeRanges', 'enableAnimation', 'enabled', 'enablePersistence', 'enableRTL', 'enableStrictMode', 'height', 'hourInterval', 'htmlAttributes', 'interval', 'locale', 'maxTime', 'minTime', 'minutesInterval', 'popupHeight', 'popupWidth', 'readOnly', 'secondsInterval', 'showPopupButton', 'showRoundedCorner', 'timeFormat', 'value', 'width'], ['value'], { 'enableRTL': 'enableRtl' }), _dec253 = (0, _aureliaDependencyInjection.inject)(Element), _dec251(_class95 = _dec252(_class95 = _dec253(_class95 = function (_WidgetBase58) {
  _inherits(ejTimePicker, _WidgetBase58);

  function ejTimePicker(element) {
    _classCallCheck(this, ejTimePicker);

    var _this60 = _possibleConstructorReturn(this, _WidgetBase58.call(this));

    _this60.isEditor = true;
    _this60.element = element;
    return _this60;
  }

  return ejTimePicker;
}(WidgetBase)) || _class95) || _class95) || _class95);
var ejToggleButton = exports.ejToggleButton = (_dec254 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toggle-button'), _dec255 = generateBindables('ejToggleButton', ['activePrefixIcon', 'activeSuffixIcon', 'activeText', 'contentType', 'cssClass', 'defaultPrefixIcon', 'defaultSuffixIcon', 'defaultText', 'enabled', 'enablePersistence', 'enableRTL', 'height', 'htmlAttributes', 'imagePosition', 'preventToggle', 'showRoundedCorner', 'size', 'toggleState', 'type', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec256 = (0, _aureliaDependencyInjection.inject)(Element), _dec254(_class96 = _dec255(_class96 = _dec256(_class96 = function (_WidgetBase59) {
  _inherits(ejToggleButton, _WidgetBase59);

  function ejToggleButton(element) {
    _classCallCheck(this, ejToggleButton);

    var _this61 = _possibleConstructorReturn(this, _WidgetBase59.call(this));

    _this61.element = element;
    return _this61;
  }

  return ejToggleButton;
}(WidgetBase)) || _class96) || _class96) || _class96);
var ejToolbar = exports.ejToolbar = (_dec257 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'toolbar'), _dec258 = generateBindables('ejToolbar', ['cssClass', 'dataSource', 'enabled', 'enableRTL', 'enableSeparator', 'fields', 'height', 'hide', 'isResponsive', 'orientation', 'query', 'showRoundedCorner', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec259 = (0, _aureliaDependencyInjection.inject)(Element), _dec257(_class97 = _dec258(_class97 = _dec259(_class97 = function (_WidgetBase60) {
  _inherits(ejToolbar, _WidgetBase60);

  function ejToolbar(element) {
    _classCallCheck(this, ejToolbar);

    var _this62 = _possibleConstructorReturn(this, _WidgetBase60.call(this));

    _this62.element = element;
    return _this62;
  }

  return ejToolbar;
}(WidgetBase)) || _class97) || _class97) || _class97);
var ejTooltip = exports.ejTooltip = (_dec260 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tooltip'), _dec261 = generateBindables('ejTooltip', ['allowKeyboardNavigation', 'animation', 'associate', 'autoCloseTimeout', 'closeMode', 'collision', 'containment', 'content', 'cssClass', 'enabled', 'enableRTL', 'height', 'isBalloon', 'position', 'showRoundedCorner', 'showShadow', 'target', 'title', 'trigger', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec262 = (0, _aureliaDependencyInjection.inject)(Element), _dec260(_class98 = _dec261(_class98 = _dec262(_class98 = function (_WidgetBase61) {
  _inherits(ejTooltip, _WidgetBase61);

  function ejTooltip(element) {
    _classCallCheck(this, ejTooltip);

    var _this63 = _possibleConstructorReturn(this, _WidgetBase61.call(this));

    _this63.element = element;
    return _this63;
  }

  return ejTooltip;
}(WidgetBase)) || _class98) || _class98) || _class98);
var ejTreeGrid = exports.ejTreeGrid = (_dec263 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid'), _dec264 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec265 = generateBindables('ejTreeGrid', ['allowColumnResize', 'allowDragAndDrop', 'allowFiltering', 'allowKeyboardNavigation', 'allowMultiSorting', 'allowSelection', 'allowSorting', 'allowPaging', 'altRowTemplateID', 'childMapping', 'columns', 'columnDialogFields', 'contextMenuSettings', 'cssClass', 'dataSource', 'headerTextOverflow', 'dragTooltip', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableResize', 'enableVirtualization', 'filterBarMode', 'idMapping', 'parentIdMapping', 'pageSettings', 'cellTooltipTemplate', 'query', 'rowHeight', 'rowTemplateID', 'selectedRowIndex', 'selectionMode', 'selectionType', 'showColumnOptions', 'showColumnChooser', 'showGridCellTooltip', 'showGridExpandCellTooltip', 'sizeSettings', 'sortSettings', 'toolbarSettings', 'treeColumnIndex'], ['dataSource', 'selectedRowIndex', 'pageSettings.currentPage'], { 'altRowTemplateID': 'altRowTemplateId', 'rowTemplateID': 'rowTemplateId' }), _dec266 = (0, _aureliaDependencyInjection.inject)(Element, _aureliaTemplating.TemplatingEngine), _dec267 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'tree-grid-column'), _dec263(_class99 = _dec264(_class99 = _dec265(_class99 = _dec266(_class99 = (_class100 = function (_WidgetBase62) {
  _inherits(ejTreeGrid, _WidgetBase62);

  function ejTreeGrid(element, templateEngine) {
    _classCallCheck(this, ejTreeGrid);

    var _this64 = _possibleConstructorReturn(this, _WidgetBase62.call(this));

    _initDefineProp(_this64, 'columns', _descriptor13, _this64);

    _this64.element = element;
    _this64.hasChildProperty = true;
    _this64.childPropertyName = 'columns';
    _this64.templateProcessor = new TemplateProcessor(_this64, templateEngine);
    _this64.templateProcessor.initTemplate();
    return _this64;
  }

  return ejTreeGrid;
}(WidgetBase), (_descriptor13 = _applyDecoratedDescriptor(_class100.prototype, 'columns', [_dec267], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class100)) || _class99) || _class99) || _class99) || _class99);
var TreeGridColumn = exports.TreeGridColumn = (_dec268 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec269 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-grid-column'), _dec270 = generateBindables('columns', ['allowFiltering', 'allowSorting', 'allowCellSelection', 'editType', 'field', 'filterEditType', 'headerText', 'visible', 'headerTemplateID', 'isFrozen', 'allowFreezing']), _dec271 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'template'), _dec268(_class102 = _dec269(_class102 = _dec270(_class102 = (_class103 = function () {
  function TreeGridColumn() {
    _classCallCheck(this, TreeGridColumn);

    _initDefineProp(this, 'template', _descriptor14, this);
  }

  TreeGridColumn.prototype.setTemplates = function setTemplates() {
    if (this.template[0]) {
      var util = new Util();
      this[util.getBindablePropertyName('template')] = this.template[0].template;
    }
  };

  return TreeGridColumn;
}(), (_descriptor14 = _applyDecoratedDescriptor(_class103.prototype, 'template', [_dec271], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class103)) || _class102) || _class102) || _class102);
var Level = exports.Level = (_dec272 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec273 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'level'), _dec274 = generateBindables('levels', ['groupBackground', 'groupBorderColor', 'groupBorderThickness', 'groupGap', 'groupPadding', 'groupPath', 'headerHeight', 'headerTemplate', 'headerVisibilityMode', 'labelPosition', 'labelTemplate', 'labelVisibilityMode', 'showHeader', 'showLabels']), _dec272(_class105 = _dec273(_class105 = _dec274(_class105 = function Level() {
  _classCallCheck(this, Level);
}) || _class105) || _class105) || _class105);
var ejTreeMap = exports.ejTreeMap = (_dec275 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'tree-map'), _dec276 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec277 = generateBindables('ejTreeMap', ['borderBrush', 'borderThickness', 'uniColorMapping', 'desaturationColorMapping', 'paletteColorMapping', 'colorValuePath', 'dataSource', 'dockPosition', 'drillDownHeaderColor', 'drillDownSelectionColor', 'enableDrillDown', 'isResponsive', 'enableResize', 'draggingOnSelection', 'draggingGroupOnSelection', 'groupColorMapping', 'legendSettings', 'highlightBorderBrush', 'highlightBorderThickness', 'highlightGroupBorderBrush', 'highlightGroupBorderThickness', 'highlightGroupOnSelection', 'highlightOnSelection', 'itemsLayoutMode', 'leafItemSettings', 'rangeColorMapping', 'selectionMode', 'groupSelectionMode', 'showLegend', 'enableGradient', 'showTooltip', 'tooltipTemplate', 'treeMapItems', 'levels', 'weightValuePath'], ['dataSource', 'weightValuePath']), _dec278 = (0, _aureliaDependencyInjection.inject)(Element), _dec279 = (0, _aureliaTemplating.children)(constants.elementPrefix + 'level'), _dec275(_class106 = _dec276(_class106 = _dec277(_class106 = _dec278(_class106 = (_class107 = function (_WidgetBase63) {
  _inherits(ejTreeMap, _WidgetBase63);

  function ejTreeMap(element) {
    _classCallCheck(this, ejTreeMap);

    var _this65 = _possibleConstructorReturn(this, _WidgetBase63.call(this));

    _initDefineProp(_this65, 'levels', _descriptor15, _this65);

    _this65.element = element;
    _this65.hasChildProperty = true;
    _this65.childPropertyName = 'levels';
    return _this65;
  }

  return ejTreeMap;
}(WidgetBase), (_descriptor15 = _applyDecoratedDescriptor(_class107.prototype, 'levels', [_dec279], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
})), _class107)) || _class106) || _class106) || _class106) || _class106);
var ejTreeView = exports.ejTreeView = (_dec280 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'tree-view'), _dec281 = generateBindables('ejTreeView', ['allowDragAndDrop', 'allowDragAndDropAcrossControl', 'allowDropSibling', 'allowDropChild', 'allowEditing', 'allowKeyboardNavigation', 'autoCheck', 'autoCheckParentNode', 'checkedNodes', 'cssClass', 'enableAnimation', 'enabled', 'enableMultipleExpand', 'enablePersistence', 'enableRTL', 'expandedNodes', 'expandOn', 'fields', 'height', 'htmlAttributes', 'loadOnDemand', 'selectedNode', 'showCheckbox', 'sortSettings', 'template', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec282 = (0, _aureliaDependencyInjection.inject)(Element), _dec280(_class109 = _dec281(_class109 = _dec282(_class109 = function (_WidgetBase64) {
  _inherits(ejTreeView, _WidgetBase64);

  function ejTreeView(element) {
    _classCallCheck(this, ejTreeView);

    var _this66 = _possibleConstructorReturn(this, _WidgetBase64.call(this));

    _this66.element = element;
    return _this66;
  }

  return ejTreeView;
}(WidgetBase)) || _class109) || _class109) || _class109);
var ejUploadbox = exports.ejUploadbox = (_dec283 = (0, _aureliaTemplating.customElement)(constants.elementPrefix + 'uploadbox'), _dec284 = (0, _aureliaTemplating.inlineView)('' + constants.aureliaTemplateString), _dec285 = generateBindables('ejUploadbox', ['allowDragAndDrop', 'asyncUpload', 'autoUpload', 'buttonText', 'cssClass', 'customFileDetails', 'dialogAction', 'dialogPosition', 'dialogText', 'dropAreaText', 'dropAreaHeight', 'dropAreaWidth', 'enabled', 'enableRTL', 'extensionsAllow', 'extensionsDeny', 'fileSize', 'height', 'locale', 'multipleFilesSelection', 'pushFile', 'removeUrl', 'saveUrl', 'showBrowseButton', 'showFileDetails', 'uploadName', 'width'], [], { 'enableRTL': 'enableRtl' }), _dec286 = (0, _aureliaDependencyInjection.inject)(Element), _dec283(_class110 = _dec284(_class110 = _dec285(_class110 = _dec286(_class110 = function (_WidgetBase65) {
  _inherits(ejUploadbox, _WidgetBase65);

  function ejUploadbox(element) {
    _classCallCheck(this, ejUploadbox);

    var _this67 = _possibleConstructorReturn(this, _WidgetBase65.call(this));

    _this67.element = element;
    return _this67;
  }

  return ejUploadbox;
}(WidgetBase)) || _class110) || _class110) || _class110) || _class110);
var ejWaitingPopup = exports.ejWaitingPopup = (_dec287 = (0, _aureliaTemplating.customAttribute)(constants.attributePrefix + 'waiting-popup'), _dec288 = generateBindables('ejWaitingPopup', ['cssClass', 'showImage', 'showOnInit', 'template', 'text']), _dec289 = (0, _aureliaDependencyInjection.inject)(Element), _dec287(_class111 = _dec288(_class111 = _dec289(_class111 = function (_WidgetBase66) {
  _inherits(ejWaitingPopup, _WidgetBase66);

  function ejWaitingPopup(element) {
    _classCallCheck(this, ejWaitingPopup);

    var _this68 = _possibleConstructorReturn(this, _WidgetBase66.call(this));

    _this68.element = element;
    return _this68;
  }

  return ejWaitingPopup;
}(WidgetBase)) || _class111) || _class111) || _class111);