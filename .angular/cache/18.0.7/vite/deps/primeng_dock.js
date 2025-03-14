import {
  RouterLink,
  RouterModule
} from "./chunk-HSZJVRYX.js";
import "./chunk-Y4XLPACD.js";
import {
  Ripple,
  RippleModule
} from "./chunk-XSTLBN2R.js";
import {
  ConnectedOverlayScrollHandler,
  DomHandler
} from "./chunk-JZQAVOZS.js";
import {
  ObjectUtils,
  PrimeNGConfig,
  PrimeTemplate,
  SharedModule,
  UniqueComponentId,
  zindexutils
} from "./chunk-7G36KURW.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-6J5OJ5M4.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadValues,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-KR6GKBAP.js";

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  interactionInProgress = false;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        const tooltipEvent = this.getOption("tooltipEvent");
        if (tooltipEvent === "hover" || tooltipEvent === "both") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        }
        if (tooltipEvent === "focus" || tooltipEvent === "both") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.el.nativeElement.querySelector(".p-component");
          if (!target) {
            target = this.getTarget(this.el.nativeElement);
          }
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    if (!this.interactionInProgress) {
      this.active = true;
      this.clearHideTimeout();
      if (this.getOption("showDelay"))
        this.showTimeout = setTimeout(() => {
          this.show();
        }, this.getOption("showDelay"));
      else
        this.show();
      if (this.getOption("life")) {
        let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
        this.hideTimeout = setTimeout(() => {
          this.hide();
        }, duration);
      }
    }
    this.interactionInProgress = true;
  }
  deactivate() {
    this.interactionInProgress = false;
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    const nativeElement = this.el.nativeElement;
    const pDialogWrapper = nativeElement.closest("p-dialog");
    if (pDialogWrapper) {
      setTimeout(() => {
        this.container && this.align();
      }, 100);
    } else {
      this.align();
    }
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    const el = this.activeElement;
    const hostOffset = this.getHostOffset();
    const left = hostOffset.left + DomHandler.getOuterWidth(el);
    const top = hostOffset.top + (DomHandler.getOuterHeight(el) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  get activeElement() {
    return this.el.nativeElement.nodeName.includes("P-") ? DomHandler.findSingle(this.el.nativeElement, ".p-component") || this.el.nativeElement : this.el.nativeElement;
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    const tooltipEvent = this.getOption("tooltipEvent");
    if (tooltipEvent === "hover" || tooltipEvent === "both") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    }
    if (tooltipEvent === "focus" || tooltipEvent === "both") {
      let target = this.el.nativeElement.querySelector(".p-component");
      if (!target) {
        target = this.getTarget(this.el.nativeElement);
      }
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: [2, "escape", "escape", booleanAttribute],
      showDelay: [2, "showDelay", "showDelay", numberAttribute],
      hideDelay: [2, "hideDelay", "hideDelay", numberAttribute],
      life: [2, "life", "life", numberAttribute],
      positionTop: [2, "positionTop", "positionTop", numberAttribute],
      positionLeft: [2, "positionLeft", "positionLeft", numberAttribute],
      autoHide: [2, "autoHide", "autoHide", booleanAttribute],
      fitContent: [2, "fitContent", "fitContent", booleanAttribute],
      hideOnEscape: [2, "hideOnEscape", "hideOnEscape", booleanAttribute],
      content: [0, "pTooltip", "content"],
      disabled: [0, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵInputTransformsFeature, ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    hideDelay: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    life: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionTop: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    positionLeft: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    autoHide: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fitContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideOnEscape: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dock.mjs
var _c0 = ["list"];
var _c1 = (a0) => ({
  "p-disabled": a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  $implicit: a0
});
function Dock_li_4_a_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", item_r3.iconStyle);
  }
}
function Dock_li_4_a_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dock_li_4_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 9);
    ɵɵtemplate(1, Dock_li_4_a_2_span_1_Template, 1, 2, "span", 10)(2, Dock_li_4_a_2_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext().$implicit;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("routerLink", item_r3.routerLink)("queryParams", item_r3.queryParams)("ngClass", ɵɵpureFunction1(17, _c1, item_r3.disabled))("routerLinkActiveOptions", item_r3.routerLinkActiveOptions || ɵɵpureFunction0(19, _c2))("target", item_r3.target)("tooltipOptions", item_r3.tooltipOptions)("fragment", item_r3.fragment)("queryParamsHandling", item_r3.queryParamsHandling)("preserveFragment", item_r3.preserveFragment)("skipLocationChange", item_r3.skipLocationChange)("replaceUrl", item_r3.replaceUrl)("state", item_r3.state);
    ɵɵattribute("tabindex", item_r3.disabled || ctx_r3.readonly ? null : item_r3.tabindex ? item_r3.tabindex : "-1")("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon && !ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(20, _c3, item_r3));
  }
}
function Dock_li_4_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 12);
  }
  if (rf & 2) {
    const item_r3 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("ngClass", item_r3.icon)("ngStyle", item_r3.iconStyle);
  }
}
function Dock_li_4_ng_template_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Dock_li_4_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, Dock_li_4_ng_template_3_span_1_Template, 1, 2, "span", 10)(2, Dock_li_4_ng_template_3_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    const item_r3 = ctx_r5.$implicit;
    const i_r5 = ctx_r5.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("tooltipPosition", item_r3.tooltipPosition)("tooltipOptions", item_r3.tooltipOptions)("ngClass", ɵɵpureFunction1(10, _c1, item_r3.disabled))("target", item_r3.target);
    ɵɵattribute("href", item_r3.url || null, ɵɵsanitizeUrl)("tabindex", item_r3.disabled || i_r5 !== ctx_r3.activeIndex && ctx_r3.readonly ? null : item_r3.tabindex ? item_r3.tabindex : "-1")("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r3.icon && !ctx_r3.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(12, _c3, item_r3));
  }
}
function Dock_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6);
    ɵɵlistener("click", function Dock_li_4_Template_li_click_0_listener($event) {
      const item_r3 = ɵɵrestoreView(_r2).$implicit;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemClick($event, item_r3));
    })("mouseenter", function Dock_li_4_Template_li_mouseenter_0_listener() {
      const i_r5 = ɵɵrestoreView(_r2).index;
      const ctx_r3 = ɵɵnextContext();
      return ɵɵresetView(ctx_r3.onItemMouseEnter(i_r5));
    });
    ɵɵelementStart(1, "div", 7);
    ɵɵtemplate(2, Dock_li_4_a_2_Template, 3, 22, "a", 8)(3, Dock_li_4_ng_template_3_Template, 3, 14, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r5 = ctx.index;
    const elseBlock_r7 = ɵɵreference(4);
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.itemClass(item_r3, i_r5));
    ɵɵattribute("id", ctx_r3.getItemId(item_r3, i_r5))("aria-label", item_r3.label)("aria-disabled", ctx_r3.disabled(item_r3))("data-pc-section", "menuitem")("data-p-focused", ctx_r3.isItemActive(ctx_r3.getItemId(item_r3, i_r5)))("data-p-disabled", ctx_r3.disabled(item_r3) || false);
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.isClickableRouterLink(item_r3))("ngIfElse", elseBlock_r7);
  }
}
var Dock = class _Dock {
  el;
  cd;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * MenuModel instance to define the action items.
   * @group Props
   */
  model = null;
  /**
   * Position of element.
   * @group Props
   */
  position = "bottom";
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Defines a string that labels the dropdown button for accessibility.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Callback to execute when button is focused.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the component loses focus.
   * @param {FocusEvent} event - Focus event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  templates;
  listViewChild;
  itemTemplate;
  currentIndex;
  tabindex = 0;
  focused = false;
  focusedOptionIndex = -1;
  get focusedOptionId() {
    return this.focusedOptionIndex !== -1 ? this.focusedOptionIndex : null;
  }
  constructor(el, cd) {
    this.el = el;
    this.cd = cd;
    this.currentIndex = -3;
  }
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  getItemId(item, index) {
    return item && item?.id ? item.id : `${index}`;
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
  }
  disabled(item) {
    return typeof item.disabled === "function" ? item.disabled() : item.disabled;
  }
  isItemActive(id) {
    return id === this.focusedOptionIndex;
  }
  onListMouseLeave() {
    this.currentIndex = -3;
    this.cd.markForCheck();
  }
  onItemMouseEnter(index) {
    this.currentIndex = index;
    if (index === 1) {
    }
    this.cd.markForCheck();
  }
  onItemClick(e, item) {
    if (item.command) {
      item.command({
        originalEvent: e,
        item
      });
    }
  }
  onListFocus(event) {
    this.focused = true;
    this.changeFocusedOptionIndex(0);
    this.onFocus.emit(event);
  }
  onListBlur(event) {
    this.focused = false;
    this.focusedOptionIndex = -1;
    this.onBlur.emit(event);
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown": {
        if (this.position === "left" || this.position === "right")
          this.onArrowDownKey();
        event.preventDefault();
        break;
      }
      case "ArrowUp": {
        if (this.position === "left" || this.position === "right")
          this.onArrowUpKey();
        event.preventDefault();
        break;
      }
      case "ArrowRight": {
        if (this.position === "top" || this.position === "bottom")
          this.onArrowDownKey();
        event.preventDefault();
        break;
      }
      case "ArrowLeft": {
        if (this.position === "top" || this.position === "bottom")
          this.onArrowUpKey();
        event.preventDefault();
        break;
      }
      case "Home": {
        this.onHomeKey();
        event.preventDefault();
        break;
      }
      case "End": {
        this.onEndKey();
        event.preventDefault();
        break;
      }
      case "Enter":
      case "Space": {
        this.onSpaceKey();
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }
  onArrowDownKey() {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
  }
  onArrowUpKey() {
    const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex);
    this.changeFocusedOptionIndex(optionIndex);
  }
  onHomeKey() {
    this.changeFocusedOptionIndex(0);
  }
  onEndKey() {
    this.changeFocusedOptionIndex(DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
  }
  onSpaceKey() {
    const element = DomHandler.findSingle(this.listViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex}`}"]`);
    const anchorElement = element && DomHandler.findSingle(element, '[data-pc-section="action"]');
    anchorElement ? anchorElement.click() : element && element.click();
  }
  findNextOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    let order = index >= menuitems.length ? menuitems.length - 1 : index < 0 ? 0 : index;
    this.focusedOptionIndex = menuitems[order].getAttribute("id");
  }
  findPrevOptionIndex(index) {
    const menuitems = DomHandler.find(this.listViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...menuitems].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  get containerClass() {
    return {
      [`p-dock p-component  p-dock-${this.position}`]: true
    };
  }
  isClickableRouterLink(item) {
    return item.routerLink && !item.disabled;
  }
  itemClass(item, index) {
    return {
      "p-dock-item": true,
      "p-dock-item-second-prev": this.currentIndex - 2 === index,
      "p-dock-item-prev": this.currentIndex - 1 === index,
      "p-dock-item-current": this.currentIndex === index,
      "p-dock-item-next": this.currentIndex + 1 === index,
      "p-dock-item-second-next": this.currentIndex + 2 === index,
      "p-focus": this.isItemActive(this.getItemId(item, index))
    };
  }
  static ɵfac = function Dock_Factory(t) {
    return new (t || _Dock)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Dock,
    selectors: [["p-dock"]],
    contentQueries: function Dock_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Dock_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      id: "id",
      style: "style",
      styleClass: "styleClass",
      model: "model",
      position: "position",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    decls: 5,
    vars: 13,
    consts: [["list", ""], ["elseBlock", ""], [3, "ngClass", "ngStyle"], [1, "p-dock-list-container"], ["role", "menu", 1, "p-dock-list", 3, "focus", "blur", "keydown", "mouseleave", "tabindex"], ["role", "menuitem", 3, "ngClass", "click", "mouseenter", 4, "ngFor", "ngForOf"], ["role", "menuitem", 3, "click", "mouseenter", "ngClass"], [1, "p-menuitem-content"], ["pRipple", "", "class", "p-dock-link", "pTooltip", "", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "target", "tooltipOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf", "ngIfElse"], ["pRipple", "", "pTooltip", "", 1, "p-dock-link", 3, "routerLink", "queryParams", "ngClass", "routerLinkActiveOptions", "target", "tooltipOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["class", "p-dock-action-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "p-dock-action-icon", 3, "ngClass", "ngStyle"], ["pRipple", "", "pTooltip", "", 1, "p-dock-link", 3, "tooltipPosition", "tooltipOptions", "ngClass", "target"]],
    template: function Dock_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "ul", 4, 0);
        ɵɵlistener("focus", function Dock_Template_ul_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListFocus($event));
        })("blur", function Dock_Template_ul_blur_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListBlur($event));
        })("keydown", function Dock_Template_ul_keydown_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListKeyDown($event));
        })("mouseleave", function Dock_Template_ul_mouseleave_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onListMouseLeave());
        });
        ɵɵtemplate(4, Dock_li_4_Template, 5, 10, "li", 5);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ctx.containerClass)("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "dock");
        ɵɵadvance(2);
        ɵɵproperty("tabindex", ctx.tabindex);
        ɵɵattribute("id", ctx.id)("aria-orientation", ctx.position === "bottom" || ctx.position === "top" ? "horizontal" : "vertical")("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("data-pc-section", "menu");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, Ripple, Tooltip],
    styles: ["@layer primeng{.p-dock{position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dock-list-container{display:flex;pointer-events:auto}.p-dock-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.p-dock-item{transition:all .2s cubic-bezier(.4,0,.2,1);will-change:transform}.p-dock-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:default}.p-dock-item-second-prev,.p-dock-item-second-next{transform:scale(1.2)}.p-dock-item-prev,.p-dock-item-next{transform:scale(1.4)}.p-dock-item-current{transform:scale(1.6);z-index:1}.p-dock-top{left:0;top:0;width:100%}.p-dock-top .p-dock-item{transform-origin:center top}.p-dock-bottom{left:0;bottom:0;width:100%}.p-dock-bottom .p-dock-item{transform-origin:center bottom}.p-dock-right{right:0;top:0;height:100%}.p-dock-right .p-dock-item{transform-origin:center right}.p-dock-right .p-dock-list{flex-direction:column}.p-dock-left{left:0;top:0;height:100%}.p-dock-left .p-dock-item{transform-origin:center left}.p-dock-left .p-dock-list{flex-direction:column}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dock, [{
    type: Component,
    args: [{
      selector: "p-dock",
      template: `
        <div [ngClass]="containerClass" [ngStyle]="style" [class]="styleClass" [attr.data-pc-name]="'dock'">
            <div class="p-dock-list-container">
                <ul
                    #list
                    [attr.id]="id"
                    class="p-dock-list"
                    role="menu"
                    [attr.aria-orientation]="position === 'bottom' || position === 'top' ? 'horizontal' : 'vertical'"
                    [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                    [tabindex]="tabindex"
                    [attr.aria-label]="ariaLabel"
                    [attr.aria-labelledby]="ariaLabelledBy"
                    [attr.data-pc-section]="'menu'"
                    (focus)="onListFocus($event)"
                    (blur)="onListBlur($event)"
                    (keydown)="onListKeyDown($event)"
                    (mouseleave)="onListMouseLeave()"
                >
                    <li
                        *ngFor="let item of model; let i = index"
                        [attr.id]="getItemId(item, i)"
                        [ngClass]="itemClass(item, i)"
                        role="menuitem"
                        [attr.aria-label]="item.label"
                        [attr.aria-disabled]="disabled(item)"
                        (click)="onItemClick($event, item)"
                        (mouseenter)="onItemMouseEnter(i)"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.data-p-focused]="isItemActive(getItemId(item, i))"
                        [attr.data-p-disabled]="disabled(item) || false"
                    >
                        <div class="p-menuitem-content" [attr.data-pc-section]="'content'">
                            <a
                                *ngIf="isClickableRouterLink(item); else elseBlock"
                                pRipple
                                [routerLink]="item.routerLink"
                                [queryParams]="item.queryParams"
                                [ngClass]="{ 'p-disabled': item.disabled }"
                                class="p-dock-link"
                                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                                [target]="item.target"
                                [attr.tabindex]="item.disabled || readonly ? null : item.tabindex ? item.tabindex : '-1'"
                                pTooltip
                                [tooltipOptions]="item.tooltipOptions"
                                [fragment]="item.fragment"
                                [queryParamsHandling]="item.queryParamsHandling"
                                [preserveFragment]="item.preserveFragment"
                                [skipLocationChange]="item.skipLocationChange"
                                [replaceUrl]="item.replaceUrl"
                                [state]="item.state"
                                [attr.aria-hidden]="true"
                            >
                                <span class="p-dock-action-icon" *ngIf="item.icon && !itemTemplate" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                            </a>
                            <ng-template #elseBlock>
                                <a
                                    [tooltipPosition]="item.tooltipPosition"
                                    [attr.href]="item.url || null"
                                    class="p-dock-link"
                                    pRipple
                                    pTooltip
                                    [tooltipOptions]="item.tooltipOptions"
                                    [ngClass]="{ 'p-disabled': item.disabled }"
                                    [target]="item.target"
                                    [attr.tabindex]="item.disabled || (i !== activeIndex && readonly) ? null : item.tabindex ? item.tabindex : '-1'"
                                    [attr.aria-hidden]="true"
                                >
                                    <span class="p-dock-action-icon" *ngIf="item.icon && !itemTemplate" [ngClass]="item.icon" [ngStyle]="item.iconStyle"></span>
                                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                                </a>
                            </ng-template>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-dock{position:absolute;z-index:1;display:flex;justify-content:center;align-items:center;pointer-events:none}.p-dock-list-container{display:flex;pointer-events:auto}.p-dock-list{margin:0;padding:0;list-style:none;display:flex;align-items:center;justify-content:center}.p-dock-item{transition:all .2s cubic-bezier(.4,0,.2,1);will-change:transform}.p-dock-link{display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;cursor:default}.p-dock-item-second-prev,.p-dock-item-second-next{transform:scale(1.2)}.p-dock-item-prev,.p-dock-item-next{transform:scale(1.4)}.p-dock-item-current{transform:scale(1.6);z-index:1}.p-dock-top{left:0;top:0;width:100%}.p-dock-top .p-dock-item{transform-origin:center top}.p-dock-bottom{left:0;bottom:0;width:100%}.p-dock-bottom .p-dock-item{transform-origin:center bottom}.p-dock-right{right:0;top:0;height:100%}.p-dock-right .p-dock-item{transform-origin:center right}.p-dock-right .p-dock-list{flex-direction:column}.p-dock-left{left:0;top:0;height:100%}.p-dock-left .p-dock-item{transform-origin:center left}.p-dock-left .p-dock-list{flex-direction:column}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    id: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    model: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list", {
        static: false
      }]
    }]
  });
})();
var DockModule = class _DockModule {
  static ɵfac = function DockModule_Factory(t) {
    return new (t || _DockModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DockModule,
    declarations: [Dock],
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
    exports: [Dock, SharedModule, TooltipModule, RouterModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, RippleModule, TooltipModule, SharedModule, TooltipModule, RouterModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DockModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, RippleModule, TooltipModule],
      exports: [Dock, SharedModule, TooltipModule, RouterModule],
      declarations: [Dock]
    }]
  }], null, null);
})();
export {
  Dock,
  DockModule
};
//# sourceMappingURL=primeng_dock.js.map
