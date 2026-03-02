import structlog

structlog.configure(
    processors=[structlog.processors.JSONRenderer()],
)
logger = structlog.get_logger()