// Generated by dts-bundle-generator v5.5.0

export declare type SupportedLanguages = "en_US" | "en" | "de_DE" | "de" | "es_ES" | "es" | "fr_FR" | "fr" | "it_IT" | "it" | "pt_PT" | "pt" | "nl_NL" | "nl";
export declare type LocaleConfig = {
	locale?: SupportedLanguages;
	phrases: Record<string, unknown>;
	mobilePhrases?: Record<string, unknown>;
};
declare const STEP_WELCOME = "welcome";
declare const STEP_USER_CONSENT = "userConsent";
declare const STEP_DOCUMENT = "document";
declare const STEP_POA = "poa";
declare const STEP_FACE = "face";
declare const STEP_COMPLETE = "complete";
declare const STEP_AUTH = "auth";
declare const STEP_CROSS_DEVICE_SESSION_INTRO = "crossDeviceSessionIntro";
export declare type PublicStepTypes = typeof STEP_WELCOME | typeof STEP_DOCUMENT | typeof STEP_POA | typeof STEP_FACE | typeof STEP_COMPLETE | typeof STEP_AUTH | typeof STEP_CROSS_DEVICE_SESSION_INTRO;
export declare type StepTypes = PublicStepTypes | typeof STEP_USER_CONSENT;
export declare type DocumentTypes = "passport" | "driving_licence" | "national_identity_card" | "residence_permit";
export declare type PoaTypes = "bank_building_society_statement" | "utility_bill" | "council_tax" | "benefit_letters" | "government_letter";
export declare type RequestedVariant = "standard" | "video";
export declare type DocumentTypeConfig = boolean | CountryConfig;
export declare type CountryConfig = {
	country: string | null;
};
export declare type CaptureOptions = {
	requestedVariant?: RequestedVariant;
	uploadFallback?: boolean;
	useUploader?: boolean;
	useWebcam?: boolean;
};
export declare type StepOptionWelcome = {
	title?: string;
	descriptions?: string[];
	nextButton?: string;
};
export declare type StepOptionAuth = {
	retries?: number;
};
export declare type StepOptionDocument = {
	documentTypes?: Partial<Record<DocumentTypes, DocumentTypeConfig>>;
	forceCrossDevice?: boolean;
	photoCaptureFallback?: never;
	showCountrySelection?: boolean;
	useLiveDocumentCapture?: boolean;
} & CaptureOptions;
export declare type StepOptionPoA = {
	country?: string;
	documentTypes?: Partial<Record<PoaTypes, boolean>>;
};
export declare type StepOptionFace = {
	forceCrossDevice?: never;
	photoCaptureFallback?: boolean;
	useMultipleSelfieCapture?: boolean;
} & CaptureOptions;
export declare type StepOptionComplete = {
	message?: string;
	submessage?: string;
};
export declare type StepOptionsMap = {
	welcome: StepOptionWelcome;
	userConsent: never;
	auth: StepOptionAuth;
	crossDeviceSessionIntro: never;
	document: StepOptionDocument;
	poa: StepOptionPoA;
	face: StepOptionFace;
	complete: StepOptionComplete;
};
export declare type StepConfigMap = {
	[Type in StepTypes]: {
		type: Type;
		options?: StepOptionsMap[Type];
	};
};
export declare type StepConfigWelcome = StepConfigMap["welcome"];
export declare type StepConfigUserConsent = StepConfigMap["userConsent"];
export declare type StepConfigAuth = StepConfigMap["auth"];
export declare type StepConfigCrossDeviceSessionIntro = StepConfigMap["crossDeviceSessionIntro"];
export declare type StepConfigDocument = StepConfigMap["document"];
export declare type StepConfigPoa = StepConfigMap["poa"];
export declare type StepConfigFace = StepConfigMap["face"];
export declare type StepConfigComplete = StepConfigMap["complete"];
export declare type PublicStepConfig = StepConfigWelcome | StepConfigDocument | StepConfigPoa | StepConfigFace | StepConfigComplete | StepConfigAuth | StepConfigCrossDeviceSessionIntro;
export declare type PrivateStepConfig = {
	skip?: boolean;
};
export declare type StepConfig = (PublicStepConfig | StepConfigUserConsent) & PrivateStepConfig;
export declare type UICustomizationOptions = {
	colorBackgroundSurfaceModal?: string;
	colorBorderSurfaceModal?: string;
	borderWidthSurfaceModal?: string;
	borderStyleSurfaceModal?: string;
	borderRadiusSurfaceModal?: string;
	fontFamilyTitle?: string;
	fontSizeTitle?: string;
	fontWeightTitle?: number;
	colorContentTitle?: string;
	fontFamilySubtitle?: string;
	fontSizeSubtitle?: string;
	fontWeightSubtitle?: number;
	colorContentSubtitle?: string;
	fontFamilyBody?: string;
	fontSizeBody?: string;
	fontWeightBody?: number;
	colorContentBody?: string;
	colorContentButtonPrimaryText?: string;
	colorBackgroundButtonPrimary?: string;
	colorBackgroundButtonPrimaryHover?: string;
	colorBackgroundButtonPrimaryActive?: string;
	colorBorderButtonPrimary?: string;
	colorContentButtonSecondaryText?: string;
	colorBackgroundButtonSecondary?: string;
	colorBackgroundButtonSecondaryHover?: string;
	colorBackgroundButtonSecondaryActive?: string;
	colorBorderButtonSecondary?: string;
	borderRadiusButton?: string;
	buttonGroupStacked?: boolean;
	colorContentDocTypeButton?: string;
	colorBackgroundDocTypeButton?: string;
	colorBorderDocTypeButton?: string;
	colorBorderDocTypeButtonHover?: string;
	colorBorderDocTypeButtonActive?: string;
	colorBackgroundIcon?: string;
	colorBorderLinkUnderline?: string;
	colorContentLinkTextHover?: string;
	colorBackgroundLinkHover?: string;
	colorBackgroundLinkActive?: string;
	colorContentAlertInfo?: string;
	colorBackgroundAlertInfo?: string;
	colorBackgroundAlertInfoLinkHover?: string;
	colorBackgroundAlertInfoLinkActive?: string;
	colorContentAlertError?: string;
	colorBackgroundAlertError?: string;
	colorBackgroundAlertErrorLinkHover?: string;
	colorBackgroundAlertErrorLinkActive?: string;
	colorBackgroundInfoPill?: string;
	colorContentInfoPill?: string;
	colorBackgroundButtonIconHover?: string;
	colorBackgroundButtonIconActive?: string;
	colorBackgroundButtonCameraHover?: string;
	colorBackgroundButtonCameraActive?: string;
	authAccentColor?: string;
	authDualSpinnerColor?: string;
	authRetryScreenOvalColor?: string;
	authOvalColor?: string;
	authTextColor?: string;
	authButtonCornerRadius?: string;
	authFrameColor?: string;
	authButtonTextHighlightColor?: string;
	authButtonTextDisabledColor?: string;
	authButtonTextNormalColor?: string;
	authButtonColorNormal?: string;
	authButtonColorDisabled?: string;
	authButtonColorPressed?: string;
	authFeedbackBarColor?: string;
	authFeedbackBarTextColor?: string;
};
export interface NormalisedSdkOptions extends Omit<SdkOptions, "steps"> {
	steps: StepConfig[];
}
export declare type DocumentSides = "front" | "back";
export declare type ImageQualityValidationTypes = "detect_document" | "detect_cutoff" | "detect_glare" | "detect_blur";
export declare type UploadFileResponse = {
	id: string;
	created_at: string;
	file_name: string;
	file_type: string;
	file_size: number;
	href: string;
	download_href: string;
};
export declare type ImageQualityWarnings = Partial<Record<ImageQualityValidationTypes, {
	valid: boolean;
}>>;
export declare type DocumentImageResponse = {
	applicant_id: string;
	type: DocumentTypes | PoaTypes;
	side: DocumentSides;
	issuing_country: string | null | undefined;
	sdk_warnings?: ImageQualityWarnings;
} & UploadFileResponse;
declare const CHALLENGE_RECITE = "recite";
declare const CHALLENGE_MOVEMENT = "movement";
export declare type ChallengePayload = {
	type: typeof CHALLENGE_RECITE;
	query: number[];
} | {
	type: typeof CHALLENGE_MOVEMENT;
	query: string;
};
export declare type VideoChallengeLanguage = {
	source: string;
	language_code: SupportedLanguages;
};
export declare type FaceVideoResponse = {
	challenge: ChallengePayload[];
	languages: VideoChallengeLanguage[];
} & UploadFileResponse;
export interface ApplyFilter {
	doc_type?: string;
}
export interface BiometricsLiveness {
	active?: BiometricsLivenessActive;
	passive?: BiometricsLivenessPassive;
}
export interface BiometricsLivenessActive {
	enabled?: boolean;
	video_settings?: BiometricsLivenessActiveVideoSettings;
}
export interface BiometricsLivenessActiveVideoSettings {
	framerate?: number;
	bitrate?: number;
	duration?: number;
	focusLock?: boolean;
	white_balanceLock?: boolean;
	exposure_lock?: boolean;
	codec?: string;
	codec_profile?: number;
}
export interface BiometricsLivenessPassive {
	enabled?: boolean;
	video_settings?: BiometricsLivenessPassiveVideoSettings;
}
export interface BiometricsLivenessPassiveVideoSettings {
	framerate?: number;
	bitrate?: number;
	duration?: number;
	focus_lock?: boolean;
	white_balance_lock?: boolean;
	exposure_lock?: boolean;
	codec?: string;
}
export interface DocumentCapture {
	torch_turn_on_timeMs?: number;
	video_length_ms?: number;
	video_bitrate?: number;
}
export interface ExperimentalFeatures {
	enable_image_quality_service?: boolean;
	enable_multi_frame_capture?: boolean;
}
export interface SdkFeatures {
	enable_require_applicant_consents?: boolean;
}
export interface OnDeviceValidation {
	max_total_retries?: number;
	threshold?: number;
	applies_to?: ApplyFilter[];
}
export interface SdkConfigurationValidations {
	on_device?: SdkConfigurationValidationsOnDevice;
}
export interface SdkConfigurationValidationsOnDevice {
	blur?: OnDeviceValidation;
}
export declare type SdkConfiguration = {
	validations?: SdkConfigurationValidations;
	experimental_features?: ExperimentalFeatures;
	document_capture?: DocumentCapture;
	biometrics_liveness?: BiometricsLiveness;
	sdk_features?: SdkFeatures;
};
export declare type EnterpriseCobranding = {
	text: string;
};
export declare type EnterpriseLogoCobranding = {
	lightLogoSrc: string;
	darkLogoSrc: string;
};
export declare type EnterpriseCallbackResponse = {
	continueWithOnfidoSubmission?: boolean;
	onfidoSuccessResponse?: DocumentImageResponse | UploadFileResponse | FaceVideoResponse;
};
export declare type EnterpriseFeatures = {
	hideOnfidoLogo?: boolean;
	cobrand?: EnterpriseCobranding;
	logoCobrand?: EnterpriseLogoCobranding;
	useCustomizedApiRequests?: boolean;
	onSubmitDocument?: (data: FormData) => Promise<EnterpriseCallbackResponse>;
	onSubmitSelfie?: (data: FormData) => Promise<EnterpriseCallbackResponse>;
	onSubmitVideo?: (data: FormData) => Promise<EnterpriseCallbackResponse>;
};
export declare type DocumentResponse = {
	id: string;
	side: string;
	type: DocumentTypes;
	variant: RequestedVariant;
};
export declare type DocumentVideoResponse = {
	id: string;
	media_uuids: string[];
	variant: "video";
};
export declare type FaceResponse = {
	id: string;
	variant: RequestedVariant;
};
export declare type SdkResponse = {
	document_front?: DocumentResponse;
	document_back?: DocumentResponse;
	document_video?: DocumentVideoResponse;
	face?: FaceResponse;
	poa?: DocumentResponse;
};
export declare type SdkError = {
	type: "exception" | "expired_token";
	message: string;
};
export declare type UserExitCode = "USER_CONSENT_DENIED";
export declare type ServerRegions = "US" | "EU" | "CA";
export interface FunctionalConfigurations {
	disableAnalytics?: boolean;
	mobileFlow?: boolean;
	roomId?: string;
	tearDown?: boolean;
	useMemoryHistory?: boolean;
}
export interface SdkOptions extends FunctionalConfigurations {
	onComplete?: (data: SdkResponse) => void;
	onError?: (error: SdkError) => void;
	onUserExit?: (data: UserExitCode) => void;
	onModalRequestClose?: () => void;
	token?: string;
	useModal?: boolean;
	isModalOpen?: boolean;
	shouldCloseOnOverlayClick?: boolean;
	containerId?: string;
	containerEl?: HTMLElement | null;
	language?: SupportedLanguages | LocaleConfig;
	region?: ServerRegions;
	smsNumberCountryCode?: string;
	userDetails?: {
		smsNumber?: string;
	};
	steps?: Array<PublicStepTypes | PublicStepConfig>;
	enterpriseFeatures?: EnterpriseFeatures;
	customUI?: UICustomizationOptions | null;
	autoFocusOnInitialScreenTitle?: boolean;
	crossDeviceClientIntroProductName?: string;
	crossDeviceClientIntroProductLogoSrc?: string;
	_crossDeviceLinkMethods?: Array<string> | null;
	overrideSdkConfiguration?: Partial<SdkConfiguration>;
}
export declare type SdkHandle = {
	containerId?: string;
	options: NormalisedSdkOptions;
	setOptions(options: SdkOptions): void;
	tearDown(): void;
};
export declare type SdkInitMethod = (options: SdkOptions) => SdkHandle;
export declare const init: SdkInitMethod;

export {};
